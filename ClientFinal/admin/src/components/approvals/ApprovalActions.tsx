import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckSquare, XSquare } from 'lucide-react';
import type { Approval } from './approval-model';

type ApprovalActionsProps = {
  approval: Approval;
  loading?: boolean;
  onApprove: (comment?: string) => Promise<void>;
  onReject: (comment: string) => Promise<void>;
};

export function ApprovalActions({ approval, loading = false, onApprove, onReject }: ApprovalActionsProps) {
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState<'approve' | 'reject' | null>(null);

  if (approval.status !== 'قيد الانتظار') {
    return null;
  }

  const busy = loading || submitting !== null;

  const handleApprove = async () => {
    setSubmitting('approve');
    try {
      await onApprove(comment.trim() || undefined);
    } finally {
      setSubmitting(null);
    }
  };

  const handleReject = async () => {
    const trimmed = comment.trim();
    if (!trimmed) return;
    setSubmitting('reject');
    try {
      await onReject(trimmed);
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">تعليق القرار (اختياري للموافقة - إلزامي للرفض)</label>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="اكتب ملاحظة القرار هنا..."
        rows={4}
        disabled={busy}
      />
      <div className="flex gap-2">
        <Button
          variant="destructive"
          onClick={handleReject}
          disabled={busy || !comment.trim()}
        >
          <XSquare className="w-4 h-4 ml-2" />
          {submitting === 'reject' ? 'جارِ الرفض...' : 'رفض'}
        </Button>
        <Button
          onClick={handleApprove}
          disabled={busy}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
        >
          <CheckSquare className="w-4 h-4 ml-2" />
          {submitting === 'approve' ? 'جارِ الموافقة...' : 'موافقة'}
        </Button>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Approval } from './approval-model';

type ApprovalTimelineProps = {
  approval: Approval;
};

export function ApprovalTimeline({ approval }: ApprovalTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">تتبع الموافقة</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">تم الإنشاء</span>
          <span className="font-mono">{approval.requestedAt}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">الحالة الحالية</span>
          <Badge
            variant={
              approval.status === 'موافق عليه'
                ? 'default'
                : approval.status === 'مرفوض'
                  ? 'destructive'
                  : 'secondary'
            }
          >
            {approval.status}
          </Badge>
        </div>
        <div>
          <span className="text-gray-600">ملاحظات القرار</span>
          <p className="mt-1">{approval.notes || '-'}</p>
        </div>
      </CardContent>
    </Card>
  );
}

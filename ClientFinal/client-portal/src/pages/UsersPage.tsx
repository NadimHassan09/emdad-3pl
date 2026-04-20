import { useState, useEffect, useCallback, useMemo } from 'react';
import { Plus, RefreshCw, Copy, Check, Search } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { getCurrentUser } from '@/lib/auth';
import { formatDateTimeEn } from '@/lib/dateFormat';
import {
  fetchTeamAccounts,
  fetchTeamRoles,
  inviteTeamAccount,
  updateTeamAccount,
  setTeamAccountActive,
  getTeamErrorMessage,
  type TeamAccountRow,
  type TeamRole,
} from '@/api/clientPortalTeam';

const ALL = '__all__';
const CLIENT_ADMIN = 'CLIENT_ADMIN';

function statusLabel(isActive: boolean) {
  return isActive ? 'مفعل' : 'غير مفعل';
}

export function UsersPage() {
  const [meSub, setMeSub] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [roles, setRoles] = useState<TeamRole[]>([]);
  const [accounts, setAccounts] = useState<TeamAccountRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [statusFilter, setStatusFilter] = useState(ALL);
  const [roleFilter, setRoleFilter] = useState(ALL);
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteFirstName, setInviteFirstName] = useState('');
  const [inviteLastName, setInviteLastName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRoleId, setInviteRoleId] = useState('');
  const [inviteSubmitting, setInviteSubmitting] = useState(false);
  const [inviteError, setInviteError] = useState<string | null>(null);

  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [tempPassword, setTempPassword] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [editUser, setEditUser] = useState<TeamAccountRow | null>(null);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editRoleId, setEditRoleId] = useState('');
  const [editSubmitting, setEditSubmitting] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  const [disableOpen, setDisableOpen] = useState(false);
  const [disableTarget, setDisableTarget] = useState<TeamAccountRow | null>(null);
  const [activateTarget, setActivateTarget] = useState<TeamAccountRow | null>(null);
  const [actionSubmitting, setActionSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchInput), 350);
    return () => clearTimeout(t);
  }, [searchInput]);

  useEffect(() => {
    void getCurrentUser().then((u) => {
      if (u?.sub) setMeSub(u.sub);
      setIsAdmin(u?.role === CLIENT_ADMIN);
    });
  }, []);

  const loadRoles = useCallback(async () => {
    try {
      const r = await fetchTeamRoles();
      setRoles(r);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const loadAccounts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params: Parameters<typeof fetchTeamAccounts>[0] = {};
      if (statusFilter === 'active') params.isActive = true;
      if (statusFilter === 'inactive') params.isActive = false;
      if (roleFilter !== ALL) params.clientRoleId = roleFilter;
      if (debouncedSearch.trim()) params.search = debouncedSearch.trim();
      const data = await fetchTeamAccounts(params);
      setAccounts(data);
    } catch (e) {
      console.error(e);
      setError(getTeamErrorMessage(e, 'تعذر تحميل المستخدمين.'));
      setAccounts([]);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, roleFilter, debouncedSearch]);

  useEffect(() => {
    void loadRoles();
  }, [loadRoles]);

  useEffect(() => {
    void loadAccounts();
  }, [loadAccounts]);

  const openEdit = (user: TeamAccountRow) => {
    setEditUser(user);
    setEditFirstName(user.firstName);
    setEditLastName(user.lastName);
    setEditEmail(user.email);
    setEditRoleId(user.clientRoleId);
    setEditError(null);
    setEditOpen(true);
  };

  const handleInvite = async () => {
    if (!inviteRoleId) {
      setInviteError('اختر دوراً للمستخدم.');
      return;
    }
    try {
      setInviteSubmitting(true);
      setInviteError(null);
      const res = await inviteTeamAccount({
        firstName: inviteFirstName.trim(),
        lastName: inviteLastName.trim(),
        email: inviteEmail.trim(),
        clientRoleId: inviteRoleId,
      });
      setTempPassword(res.temporaryPassword);
      setEmailSent(res.emailSent ?? false);
      setInviteOpen(false);
      setInviteFirstName('');
      setInviteLastName('');
      setInviteEmail('');
      setInviteRoleId('');
      setPasswordDialogOpen(true);
      setCopied(false);
      void loadAccounts();
    } catch (e) {
      setInviteError(getTeamErrorMessage(e));
    } finally {
      setInviteSubmitting(false);
    }
  };

  const handleEditSave = async () => {
    if (!editUser) return;
    try {
      setEditSubmitting(true);
      setEditError(null);
      const body: {
        firstName: string;
        lastName: string;
        email: string;
        clientRoleId?: string;
      } = {
        firstName: editFirstName.trim(),
        lastName: editLastName.trim(),
        email: editEmail.trim(),
      };
      if (isAdmin && editRoleId && editRoleId !== editUser.clientRoleId) {
        body.clientRoleId = editRoleId;
      }
      await updateTeamAccount(editUser.id, body);
      setEditOpen(false);
      setEditUser(null);
      void loadAccounts();
    } catch (e) {
      setEditError(getTeamErrorMessage(e));
    } finally {
      setEditSubmitting(false);
    }
  };

  const handleDisable = async () => {
    if (!disableTarget) return;
    try {
      setActionSubmitting(true);
      await setTeamAccountActive(disableTarget.id, false);
      setDisableOpen(false);
      setDisableTarget(null);
      void loadAccounts();
    } catch (e) {
      setError(getTeamErrorMessage(e));
      setDisableOpen(false);
    } finally {
      setActionSubmitting(false);
    }
  };

  const handleActivate = async () => {
    if (!activateTarget) return;
    try {
      setActionSubmitting(true);
      await setTeamAccountActive(activateTarget.id, true);
      setActivateTarget(null);
      void loadAccounts();
    } catch (e) {
      setError(getTeamErrorMessage(e));
    } finally {
      setActionSubmitting(false);
    }
  };

  const roleItems = useMemo(() => roles, [roles]);

  const copyPassword = () => {
    void navigator.clipboard.writeText(tempPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">مستخدمو الفريق</h1>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => void loadAccounts()}
            disabled={loading}
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            تحديث
          </Button>
          <CsvButton
            columns={[
              { key: 'name', label: 'الاسم' },
              { key: 'email', label: 'البريد الإلكتروني' },
              { key: 'roleName', label: 'الدور' },
              { key: 'status', label: 'الحالة' },
              { key: 'createdAt', label: 'وقت الإنشاء' },
            ]}
            data={accounts}
            getRow={(u) => [
              `${u.firstName} ${u.lastName}`,
              u.email,
              u.roleName,
              statusLabel(u.isActive),
              formatDateTimeEn(u.createdAt),
            ]}
            filename="users"
            disabled={loading}
          />
          <Button
            onClick={() => {
              setInviteError(null);
              setInviteOpen(true);
            }}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            دعوة مستخدم
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void loadAccounts()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">الحالة</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="الكل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>الكل</SelectItem>
                  <SelectItem value="active">مفعل</SelectItem>
                  <SelectItem value="inactive">غير مفعل</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">الدور</label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="الكل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>الكل</SelectItem>
                  {roleItems.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.roleName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">البحث</label>
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                <Input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="ابحث بالاسم أو البريد..."
                  className="w-full pr-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الاسم</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">البريد الإلكتروني</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الدور</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الحالة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">وقت الإنشاء</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 px-4">
                      <Skeleton className="h-24 w-full rounded-lg" />
                    </td>
                  </tr>
                ) : accounts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-sm text-gray-500">
                      لا يوجد مستخدمون مطابقون للبحث.
                    </td>
                  </tr>
                ) : (
                  accounts.map((user) => {
                    const canEdit = isAdmin || user.id === meSub;
                    const canToggle = isAdmin && user.id !== meSub;
                    return (
                      <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4 text-sm font-medium">
                          {user.firstName} {user.lastName}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                        <td className="py-4 px-4 text-sm">{user.roleName}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {statusLabel(user.isActive)}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {formatDateTimeEn(user.createdAt)}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap items-center gap-2">
                            {canEdit && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => openEdit(user)}
                                className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                              >
                                تعديل
                              </Button>
                            )}
                            {canToggle && user.isActive && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setDisableTarget(user);
                                  setDisableOpen(true);
                                }}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                تعطيل
                              </Button>
                            )}
                            {canToggle && !user.isActive && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setActivateTarget(user)}
                                className="text-[#176C33] hover:bg-[#176C33]/10"
                              >
                                تفعيل
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>دعوة مستخدم</DialogTitle>
          </DialogHeader>
          {inviteError && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{inviteError}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
              <Input value={inviteFirstName} onChange={(e) => setInviteFirstName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
              <Input value={inviteLastName} onChange={(e) => setInviteLastName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <Input type="email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الدور</label>
              <Select value={inviteRoleId} onValueChange={setInviteRoleId}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الدور" />
                </SelectTrigger>
                <SelectContent>
                  {roleItems.map((r) => (
                    <SelectItem key={r.id} value={r.id}>
                      {r.roleName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setInviteOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={() => void handleInvite()}
              disabled={inviteSubmitting}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] text-white"
            >
              {inviteSubmitting ? 'جاري الإرسال...' : 'إرسال الدعوة'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={passwordDialogOpen} onOpenChange={setPasswordDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>تم إنشاء الحساب</DialogTitle>
          </DialogHeader>
          {emailSent ? (
            <p className="text-sm text-gray-600 mt-2">
              تم إرسال الدعوة إلى البريد الإلكتروني. يمكنك نسخ كلمة المرور المؤقتة أدناه إذا احتاج المستخدم إليها.
            </p>
          ) : (
            <p className="text-sm text-gray-600 mt-2">
              شارك كلمة المرور المؤقتة مع المستخدم مرة واحدة فقط. يُنصح بتغييرها بعد أول تسجيل دخول.
            </p>
          )}
          <div className="flex items-center gap-2 mt-4 p-3 bg-gray-100 rounded-lg font-mono text-sm break-all">
            {tempPassword}
          </div>
          <Button type="button" variant="outline" className="mt-4 gap-2" onClick={copyPassword}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'تم النسخ' : 'نسخ'}
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>تعديل المستخدم</DialogTitle>
          </DialogHeader>
          {editError && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>{editError}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
              <Input value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
              <Input value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
              <Input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
            </div>
            {isAdmin && editUser && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الدور</label>
                <Select value={editRoleId} onValueChange={setEditRoleId}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roleItems.map((r) => (
                      <SelectItem key={r.id} value={r.id}>
                        {r.roleName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={() => void handleEditSave()}
              disabled={editSubmitting}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] text-white"
            >
              {editSubmitting ? 'جاري الحفظ...' : 'حفظ'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={disableOpen} onOpenChange={setDisableOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تعطيل الحساب</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              هل أنت متأكد من تعطيل حساب {disableTarget?.firstName} {disableTarget?.lastName}؟
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                void handleDisable();
              }}
              disabled={actionSubmitting}
              className="bg-red-600 hover:bg-red-700"
            >
              تعطيل
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!activateTarget} onOpenChange={(o) => !o && setActivateTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تفعيل الحساب</AlertDialogTitle>
            <AlertDialogDescription className="text-right">
              تفعيل حساب {activateTarget?.firstName} {activateTarget?.lastName}؟
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                void handleActivate();
              }}
              disabled={actionSubmitting}
              className="bg-[#176C33]"
            >
              تفعيل
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

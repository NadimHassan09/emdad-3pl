import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCw } from 'lucide-react';
import {
  fetchClientSettings,
  updateClientProfile,
  changeClientPassword,
  updateClientPreferences,
  getSettingsErrorMessage,
} from '@/api/clientPortalSettings';

export function SettingsPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [timezone, setTimezone] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [activeSessions, setActiveSessions] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [savingAccount, setSavingAccount] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [savingPreferences, setSavingPreferences] = useState(false);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchClientSettings();
      setFirstName(data.profile.firstName);
      setLastName(data.profile.lastName);
      setEmail(data.profile.email);
      setLanguage(data.preferences.language);
      setTimezone(data.preferences.timezone);
      setNotificationsEnabled(data.preferences.notificationsEnabled);
      setTwoFactorEnabled(data.security.twoFactorEnabled);
      setActiveSessions(data.security.activeSessions);
    } catch (e) {
      console.error(e);
      setError(getSettingsErrorMessage(e, 'تعذر تحميل إعدادات الحساب.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const handleSaveAccount = async () => {
    try {
      setSavingAccount(true);
      setError(null);
      setMessage(null);
      const res = await updateClientProfile({ firstName, lastName, email });
      setFirstName(res.profile.firstName);
      setLastName(res.profile.lastName);
      setEmail(res.profile.email);
      setMessage('تم حفظ بيانات الحساب بنجاح.');
    } catch (e) {
      setError(getSettingsErrorMessage(e, 'تعذر حفظ بيانات الحساب.'));
    } finally {
      setSavingAccount(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('كلمة المرور الجديدة وتأكيد كلمة المرور غير متطابقين');
      return;
    }
    if (!newPassword || newPassword.length < 8) {
      setError('يجب أن تحتوي كلمة المرور الجديدة على 8 أحرف على الأقل.');
      return;
    }
    try {
      setSavingPassword(true);
      setError(null);
      setMessage(null);
      await changeClientPassword({ currentPassword, newPassword });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setMessage('تم تغيير كلمة المرور بنجاح.');
    } catch (e) {
      setError(getSettingsErrorMessage(e, 'تعذر تغيير كلمة المرور.'));
    } finally {
      setSavingPassword(false);
    }
  };

  const handleSavePreferences = async () => {
    try {
      setSavingPreferences(true);
      setError(null);
      setMessage(null);
      const res = await updateClientPreferences({
        language,
        timezone,
        notificationsEnabled,
      });
      setLanguage(res.preferences.language);
      setTimezone(res.preferences.timezone);
      setNotificationsEnabled(res.preferences.notificationsEnabled);
      setTwoFactorEnabled(res.security.twoFactorEnabled);
      setActiveSessions(res.security.activeSessions);
      setMessage('تم حفظ التفضيلات بنجاح.');
    } catch (e) {
      setError(getSettingsErrorMessage(e, 'تعذر حفظ التفضيلات.'));
    } finally {
      setSavingPreferences(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-40 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">الإعدادات</h1>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => void load()}
          disabled={loading}
        >
          <RefreshCw className="w-4 h-4" />
          تحديث
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {message && (
        <Alert className="border-green-200 bg-green-50 text-green-800">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">ملفي الشخصي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 border-2 border-[#176C33]/20">
              <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-2xl font-medium">
                {firstName[0] || ''} {lastName[0] || ''}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-bold text-gray-900">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الحساب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان البريد الإلكتروني
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={() => void handleSaveAccount()}
                disabled={savingAccount}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingAccount ? 'جارِ الحفظ...' : 'حفظ'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">كلمة المرور</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الحالية
              </label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الحالية"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full"
                placeholder="أدخل كلمة المرور الجديدة"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور الجديدة
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                placeholder="أعد إدخال كلمة المرور الجديدة"
              />
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={() => void handleChangePassword()}
                disabled={savingPassword}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingPassword ? 'جارِ التغيير...' : 'تغيير كلمة المرور'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">التفضيلات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اللغة</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="العربية">العربية</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المنطقة الزمنية</label>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Riyadh">Asia/Riyadh (GMT+3)</SelectItem>
                  <SelectItem value="Asia/Dubai">Asia/Dubai (GMT+4)</SelectItem>
                  <SelectItem value="UTC">UTC (GMT+0)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <label className="text-sm font-medium text-gray-700">تفعيل الإشعارات</label>
                <p className="text-xs text-gray-500 mt-1">
                  استقبل إشعارات حول التحديثات والأنشطة المهمة
                </p>
              </div>
              <button
                type="button"
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-[#176C33]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-end pt-4">
              <Button
                onClick={() => void handleSavePreferences()}
                disabled={savingPreferences}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {savingPreferences ? 'جارِ الحفظ...' : 'حفظ التفضيلات'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">الأمان</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">المصادقة الثنائية</p>
                <p className="text-xs text-gray-500 mt-1">
                  {twoFactorEnabled
                    ? 'المصادقة الثنائية مفعلة لهذا الحساب'
                    : 'أضف طبقة إضافية من الأمان لحسابك'}
                </p>
              </div>
              <Button variant="outline" size="sm" disabled>
                {twoFactorEnabled ? 'مفعلة' : 'غير مفعلة'}
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">جلسات نشطة</p>
                <p className="text-xs text-gray-500 mt-1">
                  عدد الجلسات النشطة حالياً: {activeSessions}
                </p>
              </div>
              <Button variant="outline" size="sm" disabled>
                {activeSessions} جلسة
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

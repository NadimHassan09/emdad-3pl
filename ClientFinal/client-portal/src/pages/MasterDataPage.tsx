import { useState } from 'react';
import { Package } from 'lucide-react';
import { ProductsPage } from './ProductsPage';

type MasterDataTab = 'products';

const TABS: { id: MasterDataTab; label: string; icon: typeof Package }[] = [
  { id: 'products', label: 'المنتجات', icon: Package },
];

export function MasterDataPage() {
  const [activeTab, setActiveTab] = useState<MasterDataTab>('products');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">البيانات الأساسية</h1>
        <p className="text-sm text-gray-500 mt-1">إدارة المنتجات والبيانات المرجعية الخاصة بحسابك</p>
      </div>

      {/* Tab Bar */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-[#176C33] text-[#176C33] bg-[#176C33]/5'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'products' && <ProductsPage />}
    </div>
  );
}

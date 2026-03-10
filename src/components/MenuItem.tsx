import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItemType } from '../data/menuData';
import { formatCurrency } from '../utils/formatCurrency';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  onAdd: (item: MenuItemType) => void;
}

// React.memo prevents this component from re-rendering when the cart updates
export const MenuItem = memo(({ item, index, onAdd }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease:[0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col sm:flex-row gap-6 py-6 border-b border-[#2B2620] hover:bg-white/[0.02] transition-colors rounded-xl px-4 -mx-4 items-start sm:items-center"
    >
      {/* Item Image - Added lazy loading and async decoding for performance */}
      {item.image && (
        <div className="w-full sm:w-28 h-48 sm:h-28 shrink-0 rounded-lg overflow-hidden border border-[#2B2620] bg-[#15110D]">
          <img 
            src={item.image} 
            alt={item.name} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}
      
      {/* Item Details */}
      <div className="flex flex-col gap-2 flex-1 w-full">
        <div className="flex items-end gap-3 w-full">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-playfair text-[#FDFBF7] group-hover:text-[#D4A373] transition-colors whitespace-nowrap">
              {item.name}
            </h3>
            <div className={`w-3 h-3 shrink-0 rounded-sm border flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
          </div>
          <div className="hidden sm:block flex-1 border-b-[2px] border-dotted border-[#2B2620] mb-1.5 opacity-50" />
          <span className="text-lg font-inter text-[#FDFBF7] whitespace-nowrap sm:ml-0 ml-auto">
            {formatCurrency(item.price)}
          </span>
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <p className="text-[#A39F98] text-sm font-light leading-relaxed pr-8 flex-1">
            {item.description}
          </p>
          <button
            onClick={() => onAdd(item)}
            className="w-10 h-10 shrink-0 rounded-full border border-[#2B2620] flex items-center justify-center text-[#A39F98] hover:text-[#0C0804] hover:bg-[#D4A373] hover:border-[#D4A373] transition-all duration-300 cursor-pointer"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

MenuItem.displayName = 'MenuItem';
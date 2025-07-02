import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Plus, Minus } from 'lucide-react';
import Button from './Button';

interface PricingItem {
  id: string;
  name: string;
  price: number;
  category: 'adult' | 'children' | 'bedding' | 'work';
  unit: string;
}

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingCalculator = ({ isOpen, onClose }: CalculatorProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const pricingItems: PricingItem[] = [
    // Adult Clothes (bulk pricing)
    { id: 'adult-10', name: 'Adult Items (10 pieces)', price: 15, category: 'adult', unit: 'bundle' },
    { id: 'adult-20', name: 'Adult Items (20 pieces)', price: 20, category: 'adult', unit: 'bundle' },
    { id: 'adult-30', name: 'Adult Items (30 pieces)', price: 30, category: 'adult', unit: 'bundle' },
    { id: 'adult-extra', name: 'Adult Items (30+ each extra)', price: 0.9, category: 'adult', unit: 'item' },
    
    // Work Items
    { id: 'work-shirt', name: 'Work Shirts', price: 1.75, category: 'work', unit: 'item' },
    { id: 'work-dress', name: 'Work Dresses', price: 1.75, category: 'work', unit: 'item' },
    
    // Children's Items
    { id: 'child-item', name: 'Children\'s Items', price: 0.5, category: 'children', unit: 'item' },
    { id: 'school-uniform', name: 'School Uniform Items', price: 0.75, category: 'children', unit: 'item' },
    
    // Bedding
    { id: 'single-bed', name: 'Single Bed Set', price: 3, category: 'bedding', unit: 'set' },
    { id: 'double-bed', name: 'Double Bed Set', price: 5, category: 'bedding', unit: 'set' },
    { id: 'king-bed', name: 'King Bed Set', price: 8, category: 'bedding', unit: 'set' },
    { id: 'super-king-bed', name: 'Super King Bed Set', price: 9, category: 'bedding', unit: 'set' },
  ];

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const setQuantity = (itemId: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, value)
    }));
  };

  const calculateTotal = () => {
    return pricingItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 0;
      return total + (quantity * item.price);
    }, 0);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'adult': return 'bg-blue-50 border-blue-200';
      case 'work': return 'bg-purple-50 border-purple-200';
      case 'children': return 'bg-green-50 border-green-200';
      case 'bedding': return 'bg-orange-50 border-orange-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'adult': return 'Adult Clothing';
      case 'work': return 'Work Attire';
      case 'children': return 'Children\'s Items';
      case 'bedding': return 'Bedding';
      default: return '';
    }
  };

  const groupedItems = pricingItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, PricingItem[]>);

  const total = calculateTotal();
  const hasItems = Object.values(quantities).some(q => q > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Calculator Modal - Made Much Wider */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  <h2 className="text-2xl font-bold">Ironing Cost Calculator</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close calculator"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-2 text-blue-100">
                Calculate your estimated ironing costs by selecting the items you need pressed
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col xl:flex-row h-full max-h-[calc(90vh-120px)]">
              {/* Items List - Wider with better spacing */}
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category} className={`rounded-xl border-2 p-6 ${getCategoryColor(category)}`}>
                      <h3 className="text-xl font-semibold mb-6 text-gray-800">
                        {getCategoryTitle(category)}
                      </h3>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex-1 pr-4">
                              <div className="font-medium text-gray-900 text-lg">{item.name}</div>
                              <div className="text-sm text-gray-600 mt-1">
                                £{item.price.toFixed(2)} per {item.unit}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors disabled:opacity-50"
                                disabled={!quantities[item.id]}
                              >
                                <Minus className="w-5 h-5" />
                              </button>
                              <input
                                type="number"
                                min="0"
                                value={quantities[item.id] || 0}
                                onChange={(e) => setQuantity(item.id, parseInt(e.target.value) || 0)}
                                className="w-20 text-center border border-gray-300 rounded-md py-2 text-lg focus:ring-2 focus:ring-primary focus:border-primary"
                              />
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-10 h-10 rounded-full bg-primary hover:bg-primary-light text-white flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Panel - Wider */}
              <div className="xl:w-96 bg-gray-50 border-l border-gray-200 p-8">
                <div className="sticky top-0">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary</h3>
                  
                  {hasItems ? (
                    <div className="space-y-4 mb-8">
                      {pricingItems
                        .filter(item => quantities[item.id] > 0)
                        .map(item => {
                          const quantity = quantities[item.id];
                          const itemTotal = quantity * item.price;
                          return (
                            <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                              <div className="flex-1 pr-4">
                                <div className="font-medium text-base">{item.name}</div>
                                <div className="text-gray-600 text-sm">
                                  {quantity} × £{item.price.toFixed(2)}
                                </div>
                              </div>
                              <div className="font-medium text-lg">
                                £{itemTotal.toFixed(2)}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Add items to see your estimate</p>
                    </div>
                  )}

                  <div className="border-t-2 border-gray-300 pt-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Total Estimate:</span>
                      <span className="text-primary">£{total.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      * Prices exclude pickup/delivery charges
                    </p>
                  </div>

                  {hasItems && (
                    <div className="mt-8 space-y-4">
                      <Button variant="primary" className="w-full text-lg py-3">
                        Get Quote
                      </Button>
                      <Button 
                        variant="secondary" 
                        className="w-full text-lg py-3"
                        onClick={() => setQuantities({})}
                      >
                        Clear All
                      </Button>
                    </div>
                  )}

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-3 text-lg">Need Help?</h4>
                    <p className="text-sm text-blue-700 leading-relaxed">
                      This calculator provides estimates. Contact us for exact pricing and to discuss your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingCalculator;
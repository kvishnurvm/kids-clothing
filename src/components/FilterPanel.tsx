import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export interface FilterState {
  categories: string[];
  ageGroups: string[];
  priceRange: [number, number];
  colors: string[];
  searchQuery: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const categories = ['Boys', 'Girls', 'Baby'];
const ageGroups = ['0-2', '2-4', '4-6', '6-8', '8-12'];
const colors = [
  { name: 'Pink', hex: '#FFD1DC' },
  { name: 'Blue', hex: '#A8DADC' },
  { name: 'Mint', hex: '#B8E5D2' },
  { name: 'Peach', hex: '#FFB4A2' },
  { name: 'Lavender', hex: '#E0BBE4' },
  { name: 'Yellow', hex: '#FCF4A3' },
];

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'categories' | 'ageGroups' | 'colors', value: string) => {
    const current = filters[key];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    updateFilter(key, updated);
  };

  const clearFilters = () => {
    onFilterChange({
      categories: [],
      ageGroups: [],
      priceRange: [0, 100],
      colors: [],
      searchQuery: '',
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label>Search Products</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search by name..."
            value={filters.searchQuery}
            onChange={(e) => updateFilter('searchQuery', e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <Label>Category</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => toggleArrayFilter('categories', category)}
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm cursor-pointer flex-1"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Age Group Filter */}
      <div className="space-y-3">
        <Label>Age Group</Label>
        <div className="space-y-2">
          {ageGroups.map((age) => (
            <div key={age} className="flex items-center space-x-2">
              <Checkbox
                id={`age-${age}`}
                checked={filters.ageGroups.includes(age)}
                onCheckedChange={() => toggleArrayFilter('ageGroups', age)}
              />
              <label
                htmlFor={`age-${age}`}
                className="text-sm cursor-pointer flex-1"
              >
                {age} years
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-gray-500">
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </span>
        </div>
        <Slider
          min={0}
          max={100}
          step={5}
          value={filters.priceRange}
          onValueChange={(value) => updateFilter('priceRange', value as [number, number])}
          className="py-4"
        />
      </div>

      {/* Color Filter */}
      <div className="space-y-3">
        <Label>Colors</Label>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleArrayFilter('colors', color.name)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                filters.colors.includes(color.name)
                  ? 'border-gray-900 scale-110'
                  : 'border-gray-200 hover:scale-105'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={clearFilters}
        className="w-full rounded-full"
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Panel */}
      <div className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Filters</h3>
            <SlidersHorizontal className="w-5 h-5 text-gray-500" />
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full rounded-full"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
              <SheetDescription>
                Refine your search with these filters
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

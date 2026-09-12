import React from 'react';

interface BrandLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  withTagline = false,
}) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#0f0f10]';
  const taglineColor = theme === 'dark' ? 'text-white/60' : 'text-[#5f5e5a]';
  const borderColor = theme === 'dark' ? 'border-white/15' : 'border-black/15';

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-4xl sm:text-5xl',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Logotipo Tipográfico Conforme Identidade da Imagem (Streetwear Aesthetic) */}
      <div
        className={`flex flex-col font-sans-editorial font-extrabold lowercase select-none tracking-tight ${textColor} ${sizeClasses[size]}`}
        style={{
          letterSpacing: '-0.05em',
          lineHeight: 0.82,
        }}
      >
        <span className="block">sundays</span>
        <span className="block">project</span>
      </div>

      {withTagline && (
        <div className={`hidden sm:flex flex-col border-l ${borderColor} pl-3 font-sans-editorial`}>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-[1px] bg-black/40 dark:bg-white/40" />
            <span className={`text-[8.5px] uppercase tracking-[0.26em] ${textColor} font-semibold font-mono-tech`}>
              Streetwear &amp; Model Management
            </span>
          </div>
          <span className={`text-[7.5px] uppercase tracking-[0.3em] ${taglineColor} mt-0.5 font-mono-tech`}>
            Paris • São Paulo // Est. 2025
          </span>
        </div>
      )}
    </div>
  );
};

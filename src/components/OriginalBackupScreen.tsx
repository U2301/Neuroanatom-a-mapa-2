import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  useEffect(() => {
    const handleBodyClick = () => {
      onNavigateToAtlas();
    };
    // Ensure xpath //body clicks are captured directly
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [onNavigateToAtlas]);

  return (
    <motion.div
      id="original-backup-screen"
      data-xpath="//body"
      onClick={onNavigateToAtlas}
      initial={{ x: '100%', opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0.8 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="min-h-screen w-full bg-white text-black p-4 select-none cursor-pointer relative font-serif"
      title="Haz clic en cualquier parte de la pantalla para volver a Neuroanatomía"
    >
      {/* Exact representation from the original backup HTML and Image 3 */}
      <div className="text-base text-black">
        Original Neuroanatomy HTML Backup
      </div>

      {/* Interactive Helper Banner for the Navigation Flow */}
      <div 
        className="fixed bottom-6 right-6 bg-[#2b553c] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 text-xs font-sans border border-[#436d53] transition-transform hover:scale-105"
        onClick={(e) => {
          e.stopPropagation();
          onNavigateToAtlas();
        }}
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowLeft className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <p className="font-semibold">Transición de Navegación Push</p>
          <p className="text-[11px] text-white/80">Clic en cualquier parte de la pantalla (body) para volver al Atlas</p>
        </div>
      </div>
    </motion.div>
  );
};

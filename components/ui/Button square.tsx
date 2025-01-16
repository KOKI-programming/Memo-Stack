import styles from "./Button square.module.scss";
import React, { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"; // cn関数をインポート

const inter = Inter({ subsets: ['latin'] });

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string; // classNameプロップを追加
  onClick?: () => void; // onClickプロップを追加
  disabled?: boolean; // disabledプロップを追加
}

const Button2: React.FC<ButtonProps> = ({ children, href, className, onClick, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <div className={cn(styles.buttonContainer, className)} // cn関数を使用してクラス名を適用
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // onClickイベントを追加
      aria-disabled={disabled} // disabled状態を適用
    >
      <motion.div className={styles.square}
        animate={{
          scale: isHovered ? 120 : 1,
          backgroundColor: isHovered ? "#000000" : "#000000",
        }}
        transition={{
          ease: "easeIn",
          duration: 0.2
        }}>
      </motion.div>
      <motion.div className={styles.title} animate={{
        x: isHovered ? -8 : 8,
        color: isHovered ? "#FFFFFF" : "#000000"
      }}>
        <div className="flex items-center space-x-2"> {/* フレックスボックスを使用 */}
        {children}
        </div>
      </motion.div>
      <motion.div className={styles.iconContainer} animate={{
        x: isHovered ? 0 : 24
      }}>
        <ArrowRightIcon className={styles.icon} />
      </motion.div>
    </div>
  );

  return (
    <div className={inter.className}>
      {href ? (
        <a href={href} className={styles.link}>
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </div>
  );
}

export default Button2;
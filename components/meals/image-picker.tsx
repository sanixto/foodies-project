'use client';

import { useRef } from 'react';
import styles from './image-picker.module.css';

interface ImagePickerProps {
  label: string,
  name: string,
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageInputRef: React.RefObject<HTMLInputElement> | undefined = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
// SmoothScrollbarComponent.jsx
import React, { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScrollbarComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollbar = Scrollbar.init(container);

    // 원하는 스크롤바 옵션을 설정합니다.
    // 예를 들어, 스크롤의 가속도를 조정하려면 다음과 같이 설정합니다.
    // scrollbar.setMomentum(20);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {/* 스크롤이 적용될 컨텐츠를 추가합니다. */}
      <div style={{ height: '800px' }}>
        {/* 스크롤이 적용될 컨텐츠 내용 */}
      </div>
    </div>
  );
};

export default SmoothScrollbarComponent;

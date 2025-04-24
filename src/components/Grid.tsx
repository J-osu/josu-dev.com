import React, { useEffect, useRef } from 'react';
import '../css/gridstack.css';

const GridStackExample: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let grid: any;

    const initializeGridStack = async () => {
      const { GridStack } = await import('gridstack');
      if (gridRef.current) {
        grid = GridStack.init({
          float: true,
          cellHeight: 70,
          margin: 5,
          minRow: 1,
          column: 12,
        });

        const widget = document.createElement('div');
        widget.className = 'grid-stack-item';
        widget.setAttribute('gs-w', '2');
        widget.setAttribute('gs-h', '2');

        const content = document.createElement('div');
        content.className = 'grid-stack-item-content bg-blue-200 p-4 rounded-lg';
        content.textContent = 'Widget 1';

        widget.appendChild(content);
        gridRef.current.appendChild(widget);

        grid.makeWidget(widget);
      }
    };

    initializeGridStack();

    return () => grid?.destroy();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid-stack"
      style={{ minHeight: '300px', border: '1px dashed #ccc' }}
    ></div>
  );
};

export default GridStackExample;
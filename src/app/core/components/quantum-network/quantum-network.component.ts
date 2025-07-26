// network-visualization.component.ts
import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2, OnDestroy } from '@angular/core';

interface Node {
  id: number;
  title: string;
  category: string;
  price: string;
  icon: string;
}
@Component({
  selector: 'app-quantum-network',
  templateUrl: './quantum-network.component.html',
  styleUrls: ['./quantum-network.component.scss']
})
export class QuantumNetworkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;
  @ViewChild('radialGraph') radialGraph!: ElementRef;
  @ViewChild('mobileNodes') mobileNodes!: ElementRef;
  @ViewChild('connectionsSvg') connectionsSvg!: ElementRef;

  nodes: Node[] = [
    { id: 1, title: "HyperSpeed Antennas", category: "ACCESSORY", price: "$89.99", icon: "fas fa-wifi" },
    { id: 2, title: "Neo Mesh Extender", category: "MESH NODE", price: "$129.99", icon: "fas fa-network-wired" },
    { id: 3, title: "Cyber Security Hub", category: "SECURITY", price: "$199.99", icon: "fas fa-shield-alt" },
    { id: 4, title: "Photon Booster", category: "PERFORMANCE", price: "$79.99", icon: "fas fa-bolt" },
    { id: 4, title: "Photon Booster", category: "PERFORMANCE", price: "$79.99", icon: "fas fa-bolt" },
    { id: 4, title: "Photon Booster", category: "PERFORMANCE", price: "$79.99", icon: "fas fa-bolt" }
  ];

  private resizeListener!: () => void;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.createParticles();
    this.createRadialNodes();
    this.createMobileNodes();
    this.createConnections();
    this.addNodeHoverEffects();

    this.resizeListener = this.renderer.listen(window, 'resize', () => {
      this.updateSvgDimensions();
    });
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener();
    }
  }

  private createParticles(): void {
    const particleCount = 50;
    const container = this.particlesContainer.nativeElement;

    for (let i = 0; i < particleCount; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');

      const size = Math.random() * 4 + 2;
      this.renderer.setStyle(particle, 'width', `${size}px`);
      this.renderer.setStyle(particle, 'height', `${size}px`);
      this.renderer.setStyle(particle, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(particle, 'top', `${Math.random() * 100}%`);

      const animationDuration = Math.random() * 20 + 10;
      this.renderer.setStyle(particle, 'animation', `float ${animationDuration}s infinite linear`);

      this.renderer.appendChild(container, particle);
    }

    const style = this.renderer.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh); opacity: 0; }
      }
    `;
    this.renderer.appendChild(document.head, style);
  }

  private createRadialNodes(): void {
    const container = this.radialGraph.nativeElement;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    this.nodes.forEach((node, index) => {
      const angle = (index / this.nodes.length) * Math.PI * 2;
      const nodeX = centerX + Math.cos(angle) * radius - 80;
      const nodeY = centerY + Math.sin(angle) * radius - 100;

      const nodeElement = this.renderer.createElement('div');
      this.renderer.addClass(nodeElement, 'node');
      this.renderer.setStyle(nodeElement, 'left', `${nodeX}px`);
      this.renderer.setStyle(nodeElement, 'top', `${nodeY}px`);

      nodeElement.innerHTML = `
        <div class="node-icon" style="width: 100%;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            background: rgba(107, 116, 155, 0.5);
            color: #00f7ff;
            border-bottom: 1px solid rgba(119, 198, 222, 0.3);">
          <i class="${node.icon}"></i>
        </div>
        <div class="node-content" style="
            padding: 15px;
        
        ">
          <div class="node-title" style="
              font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 5px;
            color: #ffffff;
          ">${node.title}</div>
          <div class="node-category" style="
          
                      font-size: 0.75rem;
            color: #8a8dff;
            background: rgba(138, 141, 255, 0.1);
            padding: 2px 8px;
            border-radius: 10px;
            display: inline-block;
            margin-bottom: 10px;">${node.category}</div>
        </div>
      `;

      this.renderer.appendChild(container, nodeElement);
    });
  }

  private createMobileNodes(): void {
    const container = this.mobileNodes.nativeElement;

    this.nodes.forEach(node => {
      const nodeElement = this.renderer.createElement('div');
      this.renderer.addClass(nodeElement, 'mobile-node');

      nodeElement.innerHTML = `
        <div class="mobile-node-icon">
          <i class="${node.icon}"></i>
        </div>
        <div class="mobile-node-content">
          <div>
            <div class="node-title">${node.title}</div>
            <div class="node-category">${node.category}</div>
          </div>
          <div class="node-price">${node.price}</div>
          <button class="node-btn">ADD TO CART</button>
        </div>
      `;

      this.renderer.appendChild(container, nodeElement);
    });
  }

  private createConnections(): void {
    const svg = this.connectionsSvg.nativeElement;
    const container = this.radialGraph.nativeElement;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.7;

    // Create SVG definitions
    const defs = this.renderer.createElement('defs', 'http://www.w3.org/2000/svg');
    
    // Gradient
    const gradient = this.renderer.createElement('linearGradient', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(gradient, 'id', 'gradient');
    this.renderer.setAttribute(gradient, 'x1', '0%');
    this.renderer.setAttribute(gradient, 'y1', '0%');
    this.renderer.setAttribute(gradient, 'x2', '100%');
    this.renderer.setAttribute(gradient, 'y2', '100%');
    
    const stop1 = this.renderer.createElement('stop', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(stop1, 'offset', '0%');
    this.renderer.setAttribute(stop1, 'stop-color', '#00c3ff');
    
    const stop2 = this.renderer.createElement('stop', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(stop2, 'offset', '100%');
    this.renderer.setAttribute(stop2, 'stop-color', '#a100ff');
    
    this.renderer.appendChild(gradient, stop1);
    this.renderer.appendChild(gradient, stop2);
    this.renderer.appendChild(defs, gradient);
    
    // Glow filter
    const filter = this.renderer.createElement('filter', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(filter, 'id', 'glow');
    this.renderer.setAttribute(filter, 'height', '300%');
    this.renderer.setAttribute(filter, 'width', '300%');
    
    const feGaussianBlur = this.renderer.createElement('feGaussianBlur', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(feGaussianBlur, 'stdDeviation', '3.5');
    this.renderer.setAttribute(feGaussianBlur, 'result', 'coloredBlur');
    
    const feMerge = this.renderer.createElement('feMerge', 'http://www.w3.org/2000/svg');
    
    const feMergeNode1 = this.renderer.createElement('feMergeNode', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(feMergeNode1, 'in', 'coloredBlur');
    
    const feMergeNode2 = this.renderer.createElement('feMergeNode', 'http://www.w3.org/2000/svg');
    this.renderer.setAttribute(feMergeNode2, 'in', 'SourceGraphic');
    
    this.renderer.appendChild(feMerge, feMergeNode1);
    this.renderer.appendChild(feMerge, feMergeNode2);
    this.renderer.appendChild(filter, feGaussianBlur);
    this.renderer.appendChild(filter, feMerge);
    this.renderer.appendChild(defs, filter);
    
    this.renderer.appendChild(svg, defs);
    
    // Create connections
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const endX = centerX + Math.cos(angle) * radius;
      const endY = centerY + Math.sin(angle) * radius;
      
      const path = this.renderer.createElement('path', 'http://www.w3.org/2000/svg');
      this.renderer.addClass(path, 'connection');
      
      const cpX = centerX + Math.cos(angle) * (radius / 2);
      const cpY = centerY + Math.sin(angle) * (radius / 2);
      const cpOffset = 100;
      const cpOffsetX = cpX + Math.cos(angle + Math.PI/2) * cpOffset;
      const cpOffsetY = cpY + Math.sin(angle + Math.PI/2) * cpOffset;
      
      this.renderer.setAttribute(path, 'd', `M ${centerX} ${centerY} Q ${cpOffsetX} ${cpOffsetY}, ${endX} ${endY}`);
      this.renderer.appendChild(svg, path);
    }
    
    for (let i = 0; i < 8; i++) {
      const angle1 = (i / 8) * Math.PI * 2;
      const angle2 = ((i + 2) % 8 / 8) * Math.PI * 2;
      
      const startX = centerX + Math.cos(angle1) * radius;
      const startY = centerY + Math.sin(angle1) * radius;
      const endX = centerX + Math.cos(angle2) * radius;
      const endY = centerY + Math.sin(angle2) * radius;
      
      const path = this.renderer.createElement('path', 'http://www.w3.org/2000/svg');
      this.renderer.addClass(path, 'connection');
      
      const cpX = (startX + endX) / 2;
      const cpY = (startY + endY) / 2;
      const cpOffset = 80;
      const cpOffsetX = cpX + Math.cos(angle1 + Math.PI/2) * cpOffset;
      const cpOffsetY = cpY + Math.sin(angle1 + Math.PI/2) * cpOffset;
      
      this.renderer.setAttribute(path, 'd', `M ${startX} ${startY} Q ${cpOffsetX} ${cpOffsetY}, ${endX} ${endY}`);
      this.renderer.appendChild(svg, path);
    }
    
    this.updateSvgDimensions();
  }

  private updateSvgDimensions(): void {
    const container = this.radialGraph.nativeElement;
    this.renderer.setAttribute(
      this.connectionsSvg.nativeElement,
      'width',
      container.offsetWidth.toString()
    );
    this.renderer.setAttribute(
      this.connectionsSvg.nativeElement,
      'height',
      container.offsetHeight.toString()
    );
  }

  private addNodeHoverEffects(): void {
    const nodes = this.radialGraph.nativeElement.querySelectorAll('.node');
    nodes.forEach((node: HTMLElement) => {
      this.renderer.listen(node, 'mouseenter', () => {
        this.renderer.addClass(node, 'glow');
      });
      
      this.renderer.listen(node, 'mouseleave', () => {
        this.renderer.removeClass(node, 'glow');
      });
    });
  }
}
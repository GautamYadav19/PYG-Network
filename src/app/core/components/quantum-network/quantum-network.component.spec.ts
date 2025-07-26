import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumNetworkComponent } from './quantum-network.component';

describe('QuantumNetworkComponent', () => {
  let component: QuantumNetworkComponent;
  let fixture: ComponentFixture<QuantumNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantumNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

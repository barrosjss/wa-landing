import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FAQComponent } from '../../components/faq/faq.component';

interface FaqItem {
  id: number;
  ask: string;
  answer: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavComponent, FooterComponent, FAQComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})


export class LandingComponent {
  faqArray:FaqItem[] = [
    {
      id: 0,
      ask: '¿Qué es el sistema de minuta digital de HADA Seguridad?',
      answer: 'Es una herramienta nace debido a que El Papel sigue jugando un rol esencial para los sistemas de seguridad actuales, la Minuta Digital de HADA permite a los vigilantes registrar y gestionar de manera eficiente el ingreso de vehículos de visitantes no registrados, evitando perdida de información y mejorando la seguridad del conjunto.'
    },
    {
      id: 1,
      ask: '¿Qué sígnica HADA?',
      answer: 'La palabra HADA es un acrónimo que significa Herramienta de Análisis y Detección de Amenazas que hace referencia a toda nuestra tecnología de vanguardia.'
    },
    {
      id: 2,
      ask: '¿Cómo puedo implementar HADA Seguridad en mi comunidad?',
      answer: 'Para implementar HADA Seguridad en su comunidad, contacte a un representante de HADA para obtener más información y una evaluación personalizada de sus necesidades.'
    },
    {
      id: 3,
      ask: '¿Cuánto cuesta HADA Seguridad?',
      answer: 'El costo de HADA Seguridad varía dependiendo de las necesidades específicas de cada comunidad. Contacte a un representante de HADA para obtener una cotización personalizada.'
    },
  ]
}

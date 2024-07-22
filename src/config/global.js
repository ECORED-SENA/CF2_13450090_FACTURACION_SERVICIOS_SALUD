export default {
  global: {
    componenteFormativo:
      'Fundamentos de facturación en el sistema de salud colombiano ',
    descripcionCurso:
      'Este componente cubre la legislación relevante para la facturación en el sistema de salud colombiano, los procesos de liquidación de servicios, y la gestión y análisis de las facturas desde el punto de vista contable y administrativo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Liquidación de los Servicios de Salud normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de Beneficios en Salud (PBS)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manual SOAT y Manual ISS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La factura como documento contable',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión y trazabilidad de factura ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13450090_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de Beneficios en Salud (PBS)',
      referencia:
        'Resolución 2366 de 2023. Por la cual se actualizan integralmente los servicios y tecnologías de salud financiados con recursos de la Unidad de Pago por Capitación (UPC).',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucio%CC%81n%20No%202366%20de%202023.pdf',
    },
    {
      tema: 'Plan de Beneficios en Salud (PBS)',
      referencia:
        'Decreto 780 de 2016 Sector Salud y Protección Social. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de voluntades',
      significado:
        'acto mediante el cual una parte se compromete con otra a dar, hacer o no hacer algo.',
    },
    {
      termino: 'Autorización',
      significado:
        'emisión de un documento o registro por la entidad responsable del pago para la prestación de los servicios requeridos por el usuario. Si la entidad no responde en los términos definidos, basta con el soporte de la solicitud enviada.',
    },
    {
      termino: 'Conciliación',
      significado:
        'mecanismo de solución de conflictos entre cobrador y pagador del servicio de salud, donde un tercero neutral ayuda a gestionar las diferencias.',
    },
    {
      termino: 'Devolución',
      significado:
        'no conformidad que afecta totalmente la factura y que impide su presentación. Las causales son específicas como falta de competencia para el pago, ausencia de documentos esenciales, entre otros.',
    },
    {
      termino: 'Entidades responsables del pago',
      significado:
        'direcciones de salud, EPS de regímenes contributivo y subsidiado, entidades adaptadas, y administradoras de riesgos profesionales.',
    },
    {
      termino: 'Epicrisis',
      significado:
        'resumen de la historia clínica del paciente que recibió servicios de urgencia u hospitalización, con detalles específicos definidos en normativa.',
    },
    {
      termino: 'Glosa',
      significado:
        'no conformidad que afecta parcial o totalmente el valor de la factura durante la revisión integral por la entidad responsable del pago, requiriendo resolución por parte del prestador de servicios de salud.',
    },
    {
      termino: 'Pago por capitación',
      significado:
        'pago anticipado por persona, basado en un conjunto de servicios preestablecidos.',
    },
    {
      termino: 'Pago por evento',
      significado:
        'pago que se realiza por actividades, procedimientos, intervenciones, insumos y medicamentos prestados o suministrados a un paciente en un periodo específico, relacionado con un evento de salud.',
    },
    {
      termino: 'Prestadores de servicios de salud',
      significado:
        'se consideran como tales las instituciones prestadoras de servicios de salud y los grupos de práctica profesional que cuentan con infraestructura física para prestar servicios de salud y que se encuentran habilitados. Para efectos del presente decreto, se incluyen los profesionales independientes de salud y los servicios de transporte especial de pacientes que se encuentren habilitados.',
    },
    {
      termino: 'Red de prestación de servicios',
      significado:
        'conjunto articulado de prestadores de servicios de salud que trabajan organizada y coordinadamente, orientados por principios de complementariedad y subsidiariedad.',
    },
    {
      termino: 'Referencia y contrarreferencia',
      significado:
        'procesos que permiten la adecuada prestación de servicios de salud a los pacientes, asegurando calidad y accesibilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (9 de enero de 2007). Regula la relación existente entre responsables del pago y prestadores de servicios de salud.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (07 de diciembre de 2007). Por medio del cual se regulan algunos aspectos de las relaciones entre los prestadores de servicios de salud y las entidades responsables del pago de los servicios de salud de la población a su cargo.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (14 de agosto de 2008). Por medio de la cual se definen los formatos, mecanismos de envío, procedimientos y términos a ser implementados en las relaciones entre prestadores de servicios de salud y entidades responsables del pago de servicios de salud, definidos en el Decreto 4747 de 2007.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (19 de diciembre de 2012). Por medio de la cual se adiciona y modifica parcialmente la resolución 3047 de 2008 modificada por la resolución 416 de 2009.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (6 de mayo de 2015). Procedimiento para el cobro y pago de servicios y tecnologías sin cobertura en el POS, suministrados a los afiliados al Régimen Subsidiado.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (26 de diciembre de 2016). Por la cual se modifica el Plan de Beneficios en Salud con cargo a la Unidad de Pago por Capitación (UPC). Incluye los anexos técnicos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (11 de abril de 2017). Por la cual se modifica la Resolución 4678 de 2015 modificada por la Resolución 5975 de 2016, que adoptó la Clasificación Única de Procedimiento en Salud — CUPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (22 de mayo de 2017). Por la cual se sustituye el Anexo 2 “Listado de Procedimientos en Salud del Plan de Beneficios en Salud con cargo a la UPC” de la Resolución 6408 de 2016 y se dictan otras disposiciones.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Patricia Velásquez Orozco',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión y trazabilidad de factura 
    p.mb-5(data-aos='fade-right') #[b En Colombia existe una normativa clara respecto al tema de glosas. Como normatividad principal se cuenta con: ]
    .f-1-1.mn.p-5.mb-4
      .tarjeta.bg-white.p-4.mb-5
        LineaTiempoC.color-secundario(text-small)
          .row.justify-content-center(titulo="Decreto 4747 de 2007")
            .col-lg-6.mb-4.mb-md-0
              h4 Decreto 4747 de 2007
              p Del Ministerio de Salud y Protección Social, regula algunos aspectos de las relaciones entre los prestadores de servicios de salud y las entidades responsables del pago de los servicios de salud de la población a su cargo.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/62.svg', alt='')
          .row.justify-content-center(titulo="Resolución 3047 de 2008")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 3047 de 2008; Anexo técnico No 6
              p Manual único de glosas, devoluciones y respuestas, que detalla los procedimientos específicos para la gestión de estas operaciones en el sector salud.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/63.svg', alt='')
          .row.justify-content-center(titulo="Congreso de Colombia (9 de enero de 2007)")
            .col-lg-6.mb-4.mb-md-0
              h4 Congreso de Colombia (9 de enero de 2007)
              p Regula la relación entre responsables del pago y prestadores de servicios de salud, en lo concerniente a Entidades Promotoras de Salud (EPS) de ambos regímenes: Contributivo y Subsidiado, según la modalidad contractual adoptada y el trámite que se surta en el caso de formulación de glosas.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/64.svg', alt='')
          .row.justify-content-center(titulo="Resolución 3385 de 2011")
            .col-lg-6.mb-4.mb-md-0
              h4 Resolución 3385 de 2011
              p Publicada en el Diario Oficial No. 48.159 de 12 de agosto de 2011, modifica el Anexo Técnico número 6 que forma parte integral de la Resolución 3047 de 2008.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/65.svg', alt='')
          .row.justify-content-center(titulo="Ley 1438 de 2011")
            .col-lg-6.mb-4.mb-md-0
              h4 Ley 1438 de 2011
              p Modifica el Trámite de Glosas, estableciendo los tiempos en que se debe realizar la objeción y las respuestas pertinentes, con el fin de mejorar la eficiencia y claridad en el proceso de resolución de disputas relacionadas con la facturación de servicios de salud.
            .col-lg-3.col-6: img(src='@/assets/curso/temas/66.svg', alt='')
    p.mb-5(data-aos='fade-right') Después de organizar el paquete de la cuenta médica, de acuerdo con los criterios normalizados de cada entidad y como se describe en los acuerdos de voluntades, y tras enviarlo al ente pagador para su radicación, la IPS debe seguir la trazabilidad de la factura hasta su cancelación. Por lo tanto, se deben desarrollar los siguientes pasos: 
    .f-5-1.mn.p-5.mb-4
      .row.justify-content-center.mb-5
        .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/67.png', alt='')
        .col-lg-9
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/68.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Se envía el paquete al responsable de pago entre el 1 y el 20 de cada mes, sin sobrepasar los seis meses, asumiendo que cuanto más tarde se envíe la factura, más tarde será el pago de la cuenta. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/69.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p El responsable del área financiera realiza el asiento contable en el software, a partir de la radicación de la cuenta de cobro ante el pagador, luego de lo cual se debe iniciar el seguimiento y acciones de cobro. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/70.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Revisión de los reportes de tesorería referente a los pagos por transferencia electrónica, consignaciones o cheques girados a la IPS. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/71.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Se programan visitas periódicas a las entidades responsables del pago de salud solicitándoles el pago y/o soportes de pagos. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/72.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Se debe confirmar si efectivamente el pago fue realizado y si éste ingresó a la institución. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/73.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Al recibir la confirmación de los diferentes pagos, se debe hacer el respectivo registro contable (descargar pagos, notas créditos, notas débitos y trámites de glosas). 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/74.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Se elabora el respectivo recibo de caja de acuerdo con cada una de las certificaciones de pagos que se hayan generado en la oficina de cartera de los pagos confirmados. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/75.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-secundario--borde.w-100
                .p-4
                  p Se envía el paquete al responsable de pago entre el 1 y el 20 de cada mes, sin sobrepasar los seis meses, asumiendo que cuanto más tarde se envíe la factura, más tarde será el pago de la cuenta. 
    p.mb-5(data-aos='fade-right') Por otra parte, la entidad responsable del pago debe cumplir con los siguientes requisitos para la cancelación de la factura correspondiente al servicio prestado de su afiliado: 
    .f-5-1.mn.p-5.mb-4
      .row.justify-content-center.mb-5
        .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/76.png', alt='')
        .col-lg-9
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/77.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p El responsable del pago recibe las facturas o documentos equivalentes, presentados por los prestadores de servicios de salud, en medio físico y magnético. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/78.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se verifica en un primer momento que este cumpla con los requisitos de facturas o documento equivalente. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/79.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se valida que la información entregada cumpla con las especificaciones del contrato o normatividad vigente. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/80.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se confronta con el representante de la IPS y/o profesional, el listado y las facturas que se están radicando. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/81.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se radican los documentos de los Prestadores de Servicios de Salud, colocando sello a cada copia de la factura con el número de radicación y fecha en que se reciben las cuentas médicas. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/82.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Las cuentas médicas se seleccionan separando las facturas por el Prestador de Servicios de Salud. Cuando sea necesario, se debe evaluar la pertinencia médica y administrativa, con la verificación correspondiente por parte del analista o profesional. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/83.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se comprueba cuál es el objeto contractual y tarifas, y se constata que lo presentado en las facturas corresponda con lo realmente contratado con la respectiva IPS. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/84.svg' alt='AvatarTop' style="width: 57px ; top: 50px")
              .tarjeta.color-acento-contenido--borde.w-100
                .p-4
                  p Se realiza una lista de verificación indicando que los datos del paciente coincidan con los datos de la autorización, que las tarifas correspondan a las pactadas. 
    .titutlo-tres.mb-4: h3 Normativa y procedimientos de glosas  
    p.mb-5(data-aos='fade-right') #[b La autorización] es la formalización a través de la emisión de un documento o la generación de un registro por parte de la entidad responsable del pago para la prestación de los servicios requeridos por el usuario, según lo establecido entre el prestador de servicios de salud y la entidad responsable del pago. En caso de que la entidad responsable del pago no se pronuncie dentro de los plazos definidos en la normatividad vigente, será suficiente el soporte de la copia de la solicitud enviada a la entidad responsable del pago, o a la dirección departamental o distrital de salud. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #3c604b").p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5: img(src='@/assets/curso/temas/11.svg', alt='')
            .col-lg-10.text-white 
              h4 Importancia del personal de facturación 
              p.mb-0 Glosa: es una no conformidad que afecta parcial o totalmente el valor de la factura por prestación de servicios de salud, identificada por la entidad responsable del pago durante la revisión integral y que requiere resolución por parte del prestador de servicios de salud. 
    .titutlo-tres.mb-4: h3 Respuesta a glosas y devoluciones:  
    p.mb-5(data-aos='fade-right') Se interpreta en todos los casos como la respuesta que el prestador de servicios de salud proporciona a la glosa o devolución generada por la entidad responsable del pago. 
      br
      br
      | #[b Los motivos de glosa pueden ser:] 
    .f-1-1.mn.p-5.mb-4
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Facturación
              p Se presenta una glosa por facturación cuando hay diferencias entre el tipo y la cantidad de los servicios prestados y los facturados, cuando los conceptos pagados por el usuario no se descuentan en la factura (copagos, cuotas moderadoras, periodos de carencia u otros), o cuando se presentan errores administrativos generados en los procesos de facturación definidos en este manual.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/85.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Tarifas
              p Se glosa por tarifas cuando existen diferencias entre los valores facturados y los pactados.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/86.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Soportes
              p Se consideran glosas por soportes cuando hay ausencia, enmiendas o soportes incompletos o ilegibles.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/87.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Autorización
              p Se aplican glosas por autorización cuando los servicios facturados no fueron autorizados o difieren de los incluidos en la autorización de la entidad responsable del pago, o cuando se cobran servicios con documentos o firmas adulteradas.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/89.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Cobertura
              p Se consideran glosas por cobertura todas aquellas generadas por cobro de servicios que no están incluidos en el respectivo plan.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/90.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Pertinencia
              p Se consideran glosas por pertinencia todas aquellas que se generan por la falta de coherencia entre la historia clínica y las ayudas diagnósticas solicitadas o el tratamiento ordenado, a la luz de las guías de atención o de la auditoría médica.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/91.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Devoluciones
              p Es una no conformidad que afecta completamente la factura, encontrada por la entidad responsable del pago durante la revisión preliminar y que impide dar por presentada la factura. Las causales de devolución son concretas y se refieren a la falta de competencia para el pago, falta de autorización principal, falta de epicrisis, hoja de atención de urgencias u odontograma, factura o documento equivalente que no cumple los requisitos legales, servicio electivo no autorizado, profesional que ordena no adscrito en el caso de servicios ambulatorios de carácter electivo, y servicio ya cancelado.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/92.png', alt='')
          .row.justify-content-center
            .col-lg-8.mb-4.mb-md-0
              h4 Respuestas a glosas o devoluciones
              p Las respuestas a glosas y devoluciones deben interpretarse en todos los casos como la respuesta que el prestador de servicios de salud da a la glosa o devolución generada por la entidad responsable del pago. La codificación incluye tres dígitos: el primero indica los conceptos generales, y los dos siguientes, los conceptos específicos dentro de cada concepto general.
            .col-lg-4.col-7
              figure
                img(src='@/assets/curso/temas/93.png', alt='')
    .f-5-2.mn.p-5
      h4.mb-5 Ejemplo de codificación de glosa: 
      .row.justify-content-center.mb-5
        .col-lg-8
          .row.justify-content-center.g-0.h-100
            .col-lg-4.h-100
              .p-4.h-100(style="background-color: #daf2e4").d-flex
                img(src='@/assets/curso/temas/94.svg', alt='').m-auto
            .col-lg-8
              .p-4(style="background-color:#3c604b ").h-100
                p.mb-0.text-white El código de tarifa es 2 y, para dos códigos específicos (29), el código de la glosa es 229. Este corresponde a recargos no pactados y aplica cuando en la factura se adicionan cobros de recargos que no fueron pactados previamente entre la entidad responsable del pago y el prestador de servicios de salud.
        .col-lg-4
          .p-4(style="background-color: #fae9b5 ").h-100
            p.mb-0 Manual único de glosas: establece la bitácora para el proceso de facturación en una entidad perteneciente al sistema general de seguridad social en salud, actualizado según la resolución 3047 de 2008. 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .titulo-tres.mb-4: h3 Devolución
          p.mb-0 Es una no conformidad que afecta completamente la factura por prestación de servicios de salud, encontrada por la entidad responsable del pago durante la revisión preliminar y que impide considerar la factura como presentada. Las causales de devolución son taxativas y se refieren a la falta de competencia para el pago, falta de autorización, ausencia de epicrisis, hoja de atención de urgencias u odontograma, factura o documento equivalente que no cumple con los requisitos legales, servicio electivo no autorizado y servicio ya cancelado. La entidad responsable del pago debe informar todas las causales de devolución al momento de la misma. 
        .col-lg-4.col-7: img(src='@/assets/curso/temas/95.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta(style="background-color: #daf2e4").p-5
            .row.justify-content-center
              .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/96.svg', alt='')
              .col-lg-10
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Usuario o servicios; corresponde a otro plan o responsable.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Usuario retirado o moroso.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Autorización principal no existe o no corresponde al prestador de servicios de salud.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Ausencia del resumen de egreso o epicrisis, hoja de atención de urgencias u odontograma.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Profesional que ordena no adscrito.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Falta soporte de justificación para recobros.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Ausencia del informe de atención inicial de urgencias.
                  li
                    i.fas.fa-check-circle(style="color: #59836B")
                    | Factura que no cumple los requisitos legales.Factura ya cancelada.
      p.mb-5(data-aos='fade-right') #[b El trámite que establece la ley 1438 de 2011 respecto a los tiempos que se deben tener en cuenta son los siguientes: ]

    //todo! COMPLETAR ACORDION!!! 
    
    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Formulación y comunicación de glosas por las entidades responsables ")
            p.mb-0 
          .p-4(titulo="Respuesta a glosas por el prestador de servicios de salud ")
            p.mb-0 El prestador debe responder a las glosas dentro de los 15 días hábiles siguientes a su recepción, indicando aceptación o justificando la no aceptación. 
          .p-4(titulo="Decisión de la entidad responsable del pago tras recibir la respuesta ")
            p.mb-0 
          .p-4(titulo="Subsanación de glosas no levantadas ")
            p.mb-0 
          .p-4(titulo="Pago de valores por glosas levantadas ")
            p.mb-0 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/97.png', alt='')
    p.mb-5(data-aos='fade-right') Todo registro debe estar consignado en actas que soporten las acciones de las personas, sus roles en la operación y sus identificaciones, así como la fecha y los compromisos adquiridos en cada una de las reuniones sostenidas. 
      br
      br
      |El paso a paso de los instructivos que pueden encontrar en la página de la SuperSalud www.supersalud.gov.co  
    .tarjeta.p-4(style="background-color:#effaf4 ")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/98.svg', alt='')
        .col-lg-8
          p.mb-0 #[b ADRES] como Administradora de los Recursos del Sistema General de Seguridad Social en Salud. El artículo 66 de la Ley 1753 de 2015, por la cual se expide el Plan Nacional de Desarrollo 2014-2018, “Todos por un nuevo país, crea la Administradora de los Recursos del Sistema General de Seguridad Social en Salud-SGSSS (ADRES, por sus iniciales), con el fin de garantizar el adecuado flujo de los recursos del SGSSS e implementar los respectivos controles. 
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        p.mb-0 Los recursos que confluirán en la ADRES serán los que hoy día maneja el Fondo de Solidaridad y Garantía-FOSYGA, los del Fondo de Salvamento y Garantías para el Sector Salud-FONSAET, los que financian el aseguramiento en salud, entre otros. 
          br
          br
          |En concordancia con lo aquí señalado, opera de forma similar al actual esquema de operación del FOSYGA, solo que articulando más fuentes y usos de recursos, definidos por la ley, la ADRES recaudará, administrará y girará los recursos del SGSSS, optimizando los procesos. 
      .col-lg-3.mb-lg-0.mb-3.col-6: img(src='@/assets/curso/temas/99.svg', alt='')
      .col-lg-4
        .p-4(style="background-color: #effaf4")
          p.mb-0 El Gobierno Nacional, mediante el Decreto 1429 de 2016, modificó la estructura de la ADRES; igualmente, el Decreto 546 de 2017 estableció el 1 de agosto de 2017 como fecha a partir de la cual entrará en operación la ADRES. En virtud de lo anterior, tal y como lo señala la ley, una vez entre en operación la ADRES, se suprimirá el FOSYGA.” Tomado del ABC de implementación del ADRES.
    .titulo-tres.mb-4: h3 Gestión y análisis de cartera \
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/100.svg', alt='')
      .col-lg-11: p.mb-0 La gestión de la cartera es muy importante en una empresa, y se realiza con el ánimo de recuperar de manera pronta la inversión realizada como el capital de trabajo y garantizar la liquidez de la entidad. Esta tarea debe ser trabajada de forma eficiente y responsable porque puede implicar la pérdida de recursos, puesto que se está financiando a los clientes con los recursos de infraestructura, talento humano y financiero propios. 
    .f-5-3.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span Proceso de gestión de cobros y recuperación jurídica de cartera
          img(src='@/assets/curso/temas/101.svg', alt='')
    p.mb-5(data-aos='fade-right') El flujograma anterior describe las acciones para el cobro de cartera, incluyendo el inicio de un cobro jurídico. La IPS tiene total libertad de utilizar todos los métodos legales disponibles para garantizar el cobro efectivo de su facturación radicada. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #3c604b").p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5: img(src='@/assets/curso/temas/11.svg', alt='')
            .col-lg-10.text-white 
              p.mb-0 Después de prestar un servicio, las entidades deben ejercer persuasión para recuperar esas cuentas por cobrar y clasificar el tiempo de su cartera en 30, 60 y 90 días. También existen cuentas de difícil cobro, las cuales se catalogan con este nombre por haber agotado todos los mecanismos implementados para su cobro. 
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

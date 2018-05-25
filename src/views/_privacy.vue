<template>
  <div class="privacy" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      v-if="collapsed"
      comment="Privacy"
    >
      <Collapsed/>
    </Comment>
    <CommentBlock
      v-else
      :comment="privacy"
    />
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import Comment from './_comment.vue';
  import CommentBlock from './_comment_block.vue';
  import Collapsed from './_collapsed.vue';

  export default {
    data() {
      return {
        collapsed: true,
        privacy: `
Datenschutzerklärung für die Nutzung von Google Analytics

Diese Website benutzt Google Analytics, einen Webanalysedienst
der Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies",
Textdateien, die auf Ihrem Computer gespeichert werden und die eine
Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
den Cookie erzeugten Informationen über Ihre Benutzung dieser Website
werden in der Regel an einen Server von Google in den USA übertragen
und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung
auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb
von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten
des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.

Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
Website wird Google diese Informationen benutzen, um Ihre Nutzung der
Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen
und um weitere mit der Websitenutzung und der Internetnutzung verbundene
Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen
von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
mit anderen Daten von Google zusammengeführt.

Sie können die Speicherung der Cookies durch eine entsprechende Einstellung
Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass
Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung
der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen
Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
durch Google verhindern, indem sie das unter dem folgenden Link verfügbare
Browser-Plugin herunterladen und installieren
http://tools.google.com/dlpage/gaoptout?hl=de
        `,
      };
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Legal', 'none');
      },
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
    components: {
      Comment,
      CommentBlock,
      Collapsed,
    },
  };
</script>

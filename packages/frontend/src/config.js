import { colors, Icon } from '@bitbloq/ui';

import ThreeDEditor from './components/ThreeDEditor';
import JuniorEditor from './components/JuniorEditor';

import { addShapeGroups } from './configurations/3d/addShapeGroups';
import { bloqTypes } from './configurations/bloqs/bloqTypes';
import { boards } from './configurations/hardware/boards';
import { components } from './configurations/hardware/components';

export { addShapeGroups, bloqTypes, boards, components };

export const documentTypes = {
  junior: {
    label: 'Robótica Junior',
    shortLabel: 'Junior',
    color: colors.brandOrange,
    buttonType: 'orange',
    supported: false,
    icon: 'logo-junior',
    level: 'Principiante',
    landingText:
      'Da tus primeros pasos en la robótica con una programación por bloques sencilla e intuitiva.',
    editorComponent: JuniorEditor,
  },
  bloqs: {
    label: 'Robótica',
    shortLabel: 'Robótica',
    color: colors.green,
    supported: false,
    icon: 'logo-bloqs',
    level: 'Medio',
    landingText:
      'Programa tus inventos por bloques y aprende los conceptos básicos de la programación.',
  },
  code: {
    label: 'Código Arduino®',
    shortLabel: 'Arduino®',
    color: colors.brandPink,
    buttonType: 'pink',
    icon: 'logo-code',
    level: 'Avanzado',
    landingText:
      'Da el salto al código con Arduino®. Crea tus primeros programas y da vida a tus robots.',
    supported: false,
  },
  '3d': {
    label: 'Diseño 3D',
    shortLabel: 'Diseño 3D',
    color: colors.brandBlue,
    buttonType: 'blue',
    supported: true,
    icon: 'logo-3d',
    level: 'Medio',
    landingText:
      'Descubre las tres dimensiones, aprende geometría y convierte tus ideas en diseños 3D.',
    editorComponent: ThreeDEditor,
  },
  apps: {
    label: 'Apps para móviles',
    shortLabel: 'Apps móviles',
    color: colors.brandYellow,
    buttonType: 'yellow',
    icon: 'logo-apps',
    level: 'Avanzado',
    landingText:
      'Empieza a diseñar y programar tus propias apps para Android® e iOS®.',
    supported: false,
  },
};

export const maxSTLFileSize = 5242880;
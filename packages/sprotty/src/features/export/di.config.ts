/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { ContainerModule } from "inversify";
import { TYPES } from '../../base/types';
import { ExportSvgPostprocessor, ExportSvgKeyListener, ExportSvgCommand } from './export';
import { SvgExporter } from './svg-exporter';
import { configureCommand } from "../../base/commands/command-registration";

const exportSvgModule = new ContainerModule((bind, _unbind, isBound) => {
    bind(ExportSvgKeyListener).toSelf().inSingletonScope();
    bind(TYPES.KeyListener).toService(ExportSvgKeyListener);
    bind(TYPES.HiddenVNodePostprocessor).to(ExportSvgPostprocessor).inSingletonScope();
    configureCommand({ bind, isBound }, ExportSvgCommand);
    bind(TYPES.SvgExporter).to(SvgExporter).inSingletonScope();
});

export default exportSvgModule;

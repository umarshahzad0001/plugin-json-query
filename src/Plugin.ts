import { Plugin as BasePlugin } from '@nocobase/server';
import JsonQueryNode from './nodes/JsonQueryNode';

export default class Plugin extends BasePlugin {
  async load() {
    // Register new workflow node
    this.app.getPlugin('workflow')?.registerNode(JsonQueryNode);
  }
}

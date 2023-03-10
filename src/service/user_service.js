/**
 * 用户相关的数据库操作;
 */
// 模型;
const UserModel = require('../model/user_model');

class UserService {
  // 添加用户;
  async createUser({ user_name, user_pwd, user_title }) {
    const res = await UserModel.create({ user_name, user_pwd, user_title });
    return res.dataValues;
  }
  // 查询用户;
  async getUserInfo({
    id,
    user_name,
    user_pwd,
    user_title,
    user_portrait,
    user_age,
    user_sex,
    user_explained,
    user_shop,
    is_admin,
  }) {
    // 定义where条件
    const whereOpt = {};
    // 如果参数存在就拷贝到where条件里面;
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    user_pwd && Object.assign(whereOpt, { user_pwd });
    user_title && Object.assign(whereOpt, { user_title });
    user_portrait && Object.assign(whereOpt, { user_portrait });
    user_age && Object.assign(whereOpt, { user_age });
    user_sex && Object.assign(whereOpt, { user_sex });
    user_explained && Object.assign(whereOpt, { user_explained });
    user_shop && Object.assign(whereOpt, { user_shop });
    is_admin && Object.assign(whereOpt, { is_admin });
    const res = await UserModel.findOne({
      // 查询那些字段;
      attributes: [
        'id',
        'user_name',
        'user_pwd',
        'user_title',
        'user_portrait',
        'user_age',
        'user_sex',
        'user_explained',
        'user_shop',
        'is_admin',
      ],
      where: whereOpt,
    });
    // 判断是否查询到字段;
    return res ? res.dataValues : null;
  }
  // 更新用户信息;
  async updateById({
    id,
    user_pwd,
    user_title,
    user_portrait,
    user_age,
    user_sex,
    user_explained,
    user_shop,
    is_admin,
  }) {
    // 定义where条件;
    const whereOpt = { id };
    // 定义新的用户信息;
    const newUser = {};
    // 如果参数存在就赋值到新的用户信息里;
    user_pwd && Object.assign(newUser, { user_pwd });
    user_title && Object.assign(newUser, { user_title });
    user_portrait && Object.assign(newUser, { user_portrait });
    user_age && Object.assign(newUser, { user_age });
    user_sex && Object.assign(newUser, { user_sex });
    user_explained && Object.assign(newUser, { user_explained });
    user_shop && Object.assign(newUser, { user_shop });
    is_admin && Object.assign(newUser, { is_admin });
    const res = await UserModel.update(newUser, { where: whereOpt });
    return res[0] > 0 ? true : false;
  }
}
// 导出实例化对象;
module.exports = new UserService();

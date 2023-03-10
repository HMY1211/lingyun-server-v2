/**
 * 用户相关的错误类型;
 */
module.exports = {
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
  },
  userNameInexistence: {
    code: '10002',
    message: '用户名不存在',
  },
  userLoginParameterError: {
    code: '10003',
    message: '检查用户参数失败',
  },
  userRegistrationError: {
    code: '10004',
    message: '用户注册失败',
  },
  verifyPasswordError: {
    code: '10005',
    message: '校验密码失败',
  },
  userPasswordEncryptionError: {
    code: '10006',
    message: '用户密码加密失败',
  },
  userPasswordMismatch: {
    code: '10007',
    message: '用户密码不匹配',
  },
  userLoginError: {
    code: '10008',
    message: '用户登陆失败',
  },
  userUpdatePasswordError: {
    code: '10009',
    message: '修改密码失败',
  },
  adminLoginError: {
    code: '10010',
    message: '管理员登录失败',
  },
  notIsAdmin: {
    code: '10011',
    message: '该账号非管理员账号',
  },
};

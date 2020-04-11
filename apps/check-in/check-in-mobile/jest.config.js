module.exports = {
  name: 'check-in-check-in-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/check-in/check-in-mobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

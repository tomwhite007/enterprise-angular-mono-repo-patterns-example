module.exports = {
  name: 'booking-booking-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/booking/booking-mobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

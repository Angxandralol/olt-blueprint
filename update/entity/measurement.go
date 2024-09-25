package entity

import "time"

type Measurement struct {
	Interface   Interface `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	InterfaceID uint
	Date        time.Time
	Bandwidth   uint
	In          uint
	Out         uint
}

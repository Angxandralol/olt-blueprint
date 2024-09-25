package entity

import "time"

type Interface struct {
	ID        uint `gorm:"primaryKey"`
	IfIndex   uint
	IfName    string
	IfDescr   string
	IfAlias   string
	Device    Device `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	DeviceID  uint
	CreatedAt time.Time
	UpdatedAt time.Time
}

package model

type SnmpInfo struct {
	SysName     string
	SysLocation string
}

type Snmp map[int]interface{}

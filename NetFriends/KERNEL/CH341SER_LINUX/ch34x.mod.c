#include <linux/module.h>
#include <linux/vermagic.h>
#include <linux/compiler.h>

MODULE_INFO(vermagic, VERMAGIC_STRING);

__visible struct module __this_module
__attribute__((section(".gnu.linkonce.this_module"))) = {
	.name = KBUILD_MODNAME,
	.init = init_module,
#ifdef CONFIG_MODULE_UNLOAD
	.exit = cleanup_module,
#endif
	.arch = MODULE_ARCH_INIT,
};

#ifdef RETPOLINE
MODULE_INFO(retpoline, "Y");
#endif

static const struct modversion_info ____versions[]
__used
__attribute__((section("__versions"))) = {
	{ 0xc2996440, __VMLINUX_SYMBOL_STR(module_layout) },
	{ 0xc4edbc3b, __VMLINUX_SYMBOL_STR(usb_serial_generic_tiocmiwait) },
	{ 0xe79f854e, __VMLINUX_SYMBOL_STR(usb_serial_deregister_drivers) },
	{ 0x852f0deb, __VMLINUX_SYMBOL_STR(usb_serial_register_drivers) },
	{ 0xe9e91764, __VMLINUX_SYMBOL_STR(usb_serial_generic_resume) },
	{ 0x325fee1, __VMLINUX_SYMBOL_STR(usb_serial_generic_open) },
	{ 0x12abd86a, __VMLINUX_SYMBOL_STR(kmalloc_caches) },
	{ 0x3908fab5, __VMLINUX_SYMBOL_STR(kmem_cache_alloc_trace) },
	{ 0x409873e3, __VMLINUX_SYMBOL_STR(tty_termios_baud_rate) },
	{ 0xd0346219, __VMLINUX_SYMBOL_STR(usb_kill_urb) },
	{ 0xf25b29e8, __VMLINUX_SYMBOL_STR(usb_serial_generic_close) },
	{ 0x37a0cba, __VMLINUX_SYMBOL_STR(kfree) },
	{ 0x4da03e28, __VMLINUX_SYMBOL_STR(usb_control_msg) },
	{ 0xea696a44, __VMLINUX_SYMBOL_STR(tty_kref_put) },
	{ 0x18ef751c, __VMLINUX_SYMBOL_STR(usb_serial_handle_dcd_change) },
	{ 0xc49f21fb, __VMLINUX_SYMBOL_STR(tty_port_tty_get) },
	{ 0x65345022, __VMLINUX_SYMBOL_STR(__wake_up) },
	{ 0xbc64fe4e, __VMLINUX_SYMBOL_STR(dev_err) },
	{ 0x68b45999, __VMLINUX_SYMBOL_STR(usb_submit_urb) },
	{ 0xd8d394c7, __VMLINUX_SYMBOL_STR(__dynamic_dev_dbg) },
	{ 0x97fdbab9, __VMLINUX_SYMBOL_STR(_raw_spin_unlock_irqrestore) },
	{ 0x96220280, __VMLINUX_SYMBOL_STR(_raw_spin_lock_irqsave) },
	{ 0x1fdc7df2, __VMLINUX_SYMBOL_STR(_mcount) },
};

static const char __module_depends[]
__used
__attribute__((section(".modinfo"))) =
"depends=";

MODULE_ALIAS("usb:v1A86p5512d*dc*dsc*dp*ic*isc*ip*in*");
MODULE_ALIAS("usb:v1A86p5523d*dc*dsc*dp*ic*isc*ip*in*");
MODULE_ALIAS("usb:v1A86p7522d*dc*dsc*dp*ic*isc*ip*in*");
MODULE_ALIAS("usb:v1A86p7523d*dc*dsc*dp*ic*isc*ip*in*");
MODULE_ALIAS("usb:v4348p5523d*dc*dsc*dp*ic*isc*ip*in*");

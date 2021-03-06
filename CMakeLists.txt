cmake_minimum_required(VERSION 3.5)
project(timelapse2)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

set(SOURCE_FILES
    .idea/copyright/profiles_settings.xml
    .idea/compiler.xml
    .idea/misc.xml
    .idea/modules.xml
    .idea/workspace.xml
    .pioenvs/d1_mini/ESP8266mDNS/ESP8266mDNS.cpp
    .pioenvs/d1_mini/ESP8266mDNS/ESP8266mDNS.d
    .pioenvs/d1_mini/ESP8266mDNS/ESP8266mDNS.h
    .pioenvs/d1_mini/ESP8266mDNS/ESP8266mDNS.o
    .pioenvs/d1_mini/ESP8266WebServer/detail/RequestHandler.h
    .pioenvs/d1_mini/ESP8266WebServer/detail/RequestHandlersImpl.h
    .pioenvs/d1_mini/ESP8266WebServer/ESP8266WebServer.cpp
    .pioenvs/d1_mini/ESP8266WebServer/ESP8266WebServer.d
    .pioenvs/d1_mini/ESP8266WebServer/ESP8266WebServer.h
    .pioenvs/d1_mini/ESP8266WebServer/ESP8266WebServer.o
    .pioenvs/d1_mini/ESP8266WebServer/Parsing.cpp
    .pioenvs/d1_mini/ESP8266WebServer/Parsing.d
    .pioenvs/d1_mini/ESP8266WebServer/Parsing.o
    .pioenvs/d1_mini/ESP8266WiFi/include/ClientContext.h
    .pioenvs/d1_mini/ESP8266WiFi/include/slist.h
    .pioenvs/d1_mini/ESP8266WiFi/include/ssl.h
    .pioenvs/d1_mini/ESP8266WiFi/include/UdpContext.h
    .pioenvs/d1_mini/ESP8266WiFi/include/wl_definitions.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFi.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFi.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFi.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFi.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiAP.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiAP.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiAP.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiAP.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiGeneric.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiGeneric.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiGeneric.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiGeneric.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiMulti.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiMulti.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiMulti.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiMulti.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiScan.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiScan.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiScan.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiScan.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiSTA.cpp
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiSTA.d
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiSTA.h
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiSTA.o
    .pioenvs/d1_mini/ESP8266WiFi/ESP8266WiFiType.h
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClient.cpp
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClient.d
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClient.h
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClient.o
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClientSecure.cpp
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClientSecure.d
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClientSecure.h
    .pioenvs/d1_mini/ESP8266WiFi/WiFiClientSecure.o
    .pioenvs/d1_mini/ESP8266WiFi/WiFiServer.cpp
    .pioenvs/d1_mini/ESP8266WiFi/WiFiServer.d
    .pioenvs/d1_mini/ESP8266WiFi/WiFiServer.h
    .pioenvs/d1_mini/ESP8266WiFi/WiFiServer.o
    .pioenvs/d1_mini/ESP8266WiFi/WiFiUdp.cpp
    .pioenvs/d1_mini/ESP8266WiFi/WiFiUdp.d
    .pioenvs/d1_mini/ESP8266WiFi/WiFiUdp.h
    .pioenvs/d1_mini/ESP8266WiFi/WiFiUdp.o
    .pioenvs/d1_mini/FrameworkArduino/libb64/cdecode.c
    .pioenvs/d1_mini/FrameworkArduino/libb64/cdecode.d
    .pioenvs/d1_mini/FrameworkArduino/libb64/cdecode.h
    .pioenvs/d1_mini/FrameworkArduino/libb64/cdecode.o
    .pioenvs/d1_mini/FrameworkArduino/libb64/cencode.c
    .pioenvs/d1_mini/FrameworkArduino/libb64/cencode.d
    .pioenvs/d1_mini/FrameworkArduino/libb64/cencode.h
    .pioenvs/d1_mini/FrameworkArduino/libb64/cencode.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs.h
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_cache.c
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_cache.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_cache.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_check.c
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_check.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_check.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_config.h
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_gc.c
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_gc.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_gc.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_hydrogen.c
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_hydrogen.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_hydrogen.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_nucleus.c
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_nucleus.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_nucleus.h
    .pioenvs/d1_mini/FrameworkArduino/spiffs/spiffs_nucleus.o
    .pioenvs/d1_mini/FrameworkArduino/umm_malloc/umm_malloc.c
    .pioenvs/d1_mini/FrameworkArduino/umm_malloc/umm_malloc.d
    .pioenvs/d1_mini/FrameworkArduino/umm_malloc/umm_malloc.h
    .pioenvs/d1_mini/FrameworkArduino/umm_malloc/umm_malloc.o
    .pioenvs/d1_mini/FrameworkArduino/umm_malloc/umm_malloc_cfg.h
    .pioenvs/d1_mini/FrameworkArduino/abi.cpp
    .pioenvs/d1_mini/FrameworkArduino/abi.d
    .pioenvs/d1_mini/FrameworkArduino/abi.o
    .pioenvs/d1_mini/FrameworkArduino/Arduino.h
    .pioenvs/d1_mini/FrameworkArduino/base64.cpp
    .pioenvs/d1_mini/FrameworkArduino/base64.d
    .pioenvs/d1_mini/FrameworkArduino/base64.h
    .pioenvs/d1_mini/FrameworkArduino/base64.o
    .pioenvs/d1_mini/FrameworkArduino/binary.h
    .pioenvs/d1_mini/FrameworkArduino/cbuf.cpp
    .pioenvs/d1_mini/FrameworkArduino/cbuf.d
    .pioenvs/d1_mini/FrameworkArduino/cbuf.h
    .pioenvs/d1_mini/FrameworkArduino/cbuf.o
    .pioenvs/d1_mini/FrameworkArduino/Client.h
    .pioenvs/d1_mini/FrameworkArduino/cont.d
    .pioenvs/d1_mini/FrameworkArduino/cont.h
    .pioenvs/d1_mini/FrameworkArduino/cont.o
    .pioenvs/d1_mini/FrameworkArduino/cont.S
    .pioenvs/d1_mini/FrameworkArduino/cont_util.c
    .pioenvs/d1_mini/FrameworkArduino/cont_util.d
    .pioenvs/d1_mini/FrameworkArduino/cont_util.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_eboot_command.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_eboot_command.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_eboot_command.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_features.h
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_flash_utils.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_flash_utils.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_flash_utils.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_i2s.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_i2s.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_i2s.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_main.cpp
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_main.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_main.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_noniso.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_noniso.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_noniso.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_phy.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_phy.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_phy.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_postmortem.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_postmortem.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_postmortem.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_si2c.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_si2c.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_si2c.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_timer.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_timer.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_timer.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_analog.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_analog.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_analog.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_digital.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_digital.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_digital.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pulse.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pulse.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pulse.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pwm.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pwm.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_pwm.o
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_shift.c
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_shift.d
    .pioenvs/d1_mini/FrameworkArduino/core_esp8266_wiring_shift.o
    .pioenvs/d1_mini/FrameworkArduino/debug.cpp
    .pioenvs/d1_mini/FrameworkArduino/debug.d
    .pioenvs/d1_mini/FrameworkArduino/debug.h
    .pioenvs/d1_mini/FrameworkArduino/debug.o
    .pioenvs/d1_mini/FrameworkArduino/eboot_command.h
    .pioenvs/d1_mini/FrameworkArduino/Esp.cpp
    .pioenvs/d1_mini/FrameworkArduino/Esp.d
    .pioenvs/d1_mini/FrameworkArduino/Esp.h
    .pioenvs/d1_mini/FrameworkArduino/Esp.o
    .pioenvs/d1_mini/FrameworkArduino/esp8266_peri.h
    .pioenvs/d1_mini/FrameworkArduino/flash_utils.h
    .pioenvs/d1_mini/FrameworkArduino/FS.cpp
    .pioenvs/d1_mini/FrameworkArduino/FS.d
    .pioenvs/d1_mini/FrameworkArduino/FS.h
    .pioenvs/d1_mini/FrameworkArduino/FS.o
    .pioenvs/d1_mini/FrameworkArduino/FSImpl.h
    .pioenvs/d1_mini/FrameworkArduino/HardwareSerial.cpp
    .pioenvs/d1_mini/FrameworkArduino/HardwareSerial.d
    .pioenvs/d1_mini/FrameworkArduino/HardwareSerial.h
    .pioenvs/d1_mini/FrameworkArduino/HardwareSerial.o
    .pioenvs/d1_mini/FrameworkArduino/heap.c
    .pioenvs/d1_mini/FrameworkArduino/heap.d
    .pioenvs/d1_mini/FrameworkArduino/heap.o
    .pioenvs/d1_mini/FrameworkArduino/i2s.h
    .pioenvs/d1_mini/FrameworkArduino/interrupts.h
    .pioenvs/d1_mini/FrameworkArduino/IPAddress.cpp
    .pioenvs/d1_mini/FrameworkArduino/IPAddress.d
    .pioenvs/d1_mini/FrameworkArduino/IPAddress.h
    .pioenvs/d1_mini/FrameworkArduino/IPAddress.o
    .pioenvs/d1_mini/FrameworkArduino/libc_replacements.c
    .pioenvs/d1_mini/FrameworkArduino/libc_replacements.d
    .pioenvs/d1_mini/FrameworkArduino/libc_replacements.o
    .pioenvs/d1_mini/FrameworkArduino/md5.h
    .pioenvs/d1_mini/FrameworkArduino/MD5Builder.cpp
    .pioenvs/d1_mini/FrameworkArduino/MD5Builder.d
    .pioenvs/d1_mini/FrameworkArduino/MD5Builder.h
    .pioenvs/d1_mini/FrameworkArduino/MD5Builder.o
    .pioenvs/d1_mini/FrameworkArduino/pgmspace.cpp
    .pioenvs/d1_mini/FrameworkArduino/pgmspace.d
    .pioenvs/d1_mini/FrameworkArduino/pgmspace.h
    .pioenvs/d1_mini/FrameworkArduino/pgmspace.o
    .pioenvs/d1_mini/FrameworkArduino/Print.cpp
    .pioenvs/d1_mini/FrameworkArduino/Print.d
    .pioenvs/d1_mini/FrameworkArduino/Print.h
    .pioenvs/d1_mini/FrameworkArduino/Print.o
    .pioenvs/d1_mini/FrameworkArduino/Printable.h
    .pioenvs/d1_mini/FrameworkArduino/Server.h
    .pioenvs/d1_mini/FrameworkArduino/spiffs_api.cpp
    .pioenvs/d1_mini/FrameworkArduino/spiffs_api.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs_api.h
    .pioenvs/d1_mini/FrameworkArduino/spiffs_api.o
    .pioenvs/d1_mini/FrameworkArduino/spiffs_hal.cpp
    .pioenvs/d1_mini/FrameworkArduino/spiffs_hal.d
    .pioenvs/d1_mini/FrameworkArduino/spiffs_hal.o
    .pioenvs/d1_mini/FrameworkArduino/stdlib_noniso.h
    .pioenvs/d1_mini/FrameworkArduino/Stream.cpp
    .pioenvs/d1_mini/FrameworkArduino/Stream.d
    .pioenvs/d1_mini/FrameworkArduino/Stream.h
    .pioenvs/d1_mini/FrameworkArduino/Stream.o
    .pioenvs/d1_mini/FrameworkArduino/StreamString.cpp
    .pioenvs/d1_mini/FrameworkArduino/StreamString.d
    .pioenvs/d1_mini/FrameworkArduino/StreamString.h
    .pioenvs/d1_mini/FrameworkArduino/StreamString.o
    .pioenvs/d1_mini/FrameworkArduino/time.c
    .pioenvs/d1_mini/FrameworkArduino/time.d
    .pioenvs/d1_mini/FrameworkArduino/time.o
    .pioenvs/d1_mini/FrameworkArduino/Tone.cpp
    .pioenvs/d1_mini/FrameworkArduino/Tone.d
    .pioenvs/d1_mini/FrameworkArduino/Tone.o
    .pioenvs/d1_mini/FrameworkArduino/twi.h
    .pioenvs/d1_mini/FrameworkArduino/uart.c
    .pioenvs/d1_mini/FrameworkArduino/uart.d
    .pioenvs/d1_mini/FrameworkArduino/uart.h
    .pioenvs/d1_mini/FrameworkArduino/uart.o
    .pioenvs/d1_mini/FrameworkArduino/Udp.h
    .pioenvs/d1_mini/FrameworkArduino/Updater.cpp
    .pioenvs/d1_mini/FrameworkArduino/Updater.d
    .pioenvs/d1_mini/FrameworkArduino/Updater.h
    .pioenvs/d1_mini/FrameworkArduino/Updater.o
    .pioenvs/d1_mini/FrameworkArduino/user_config.h
    .pioenvs/d1_mini/FrameworkArduino/WCharacter.h
    .pioenvs/d1_mini/FrameworkArduino/wiring_private.h
    .pioenvs/d1_mini/FrameworkArduino/WMath.cpp
    .pioenvs/d1_mini/FrameworkArduino/WMath.d
    .pioenvs/d1_mini/FrameworkArduino/WMath.o
    .pioenvs/d1_mini/FrameworkArduino/WString.cpp
    .pioenvs/d1_mini/FrameworkArduino/WString.d
    .pioenvs/d1_mini/FrameworkArduino/WString.h
    .pioenvs/d1_mini/FrameworkArduino/WString.o
    .pioenvs/d1_mini/FrameworkArduinoVariant/pins_arduino.h
    .pioenvs/d1_mini/generic/common.h
    .pioenvs/d1_mini/src/tmp_ino_to.d
    .pioenvs/d1_mini/src/tmp_ino_to.o
    .pioenvs/d1_mini/firmware.bin
    .pioenvs/d1_mini/firmware.elf
    .pioenvs/d1_mini/libESP8266mDNS.a
    .pioenvs/d1_mini/libESP8266WebServer.a
    .pioenvs/d1_mini/libESP8266WiFi.a
    .pioenvs/d1_mini/libFrameworkArduino.a
    .pioenvs/d1_mini/libFrameworkArduinoVariant.a
    .pioenvs/.sconsign.dblite
    .pioenvs/structure.hash
    lib/readme.txt
    src/timelapse.ino
    .gitignore
    .travis.yml
    boards.txt
    platformio.ini
    timelapse2.iml)

include_directories(c:/Users/Sergey/.platformio/packages/framework-arduinoespressif/libraries)

add_executable(timelapse2 ${SOURCE_FILES})

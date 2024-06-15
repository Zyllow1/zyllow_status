RegisterServerEvent('zyllow_ui:requestPing')
AddEventHandler('zyllow_ui:requestPing', function()
    local src = source
    local ping = GetPlayerPing(src)
    
    TriggerClientEvent('zyllow_ui:sendPing', src, ping)
end)
export default class DeliveryProfile {
  constructor(id, name, phone, address, detail, zip) {
    this.id = id,
    this.name = name,
    this.phone = phone,
    this.address = address,
    this.detail = detail,
    this.zip = zip,
    this.isDefault = false
    this.updateLocalStorage()
  }

   updateIsDefault(value) {
    this.isDefault = value
    this.updateLocalStorage()
    this.synchronizeSiblings()
  }
  

  updateLocalStorage() {
    const deliveryProfiles = JSON.parse(localStorage.getItem("deliveryProfiles")) || []
    const index = deliveryProfiles.findIndex(profile => profile.id === this.id)

    if (index > -1) {
      deliveryProfiles[index] = this
    } else {
      deliveryProfiles.push(this)
    }

    localStorage.setItem("deliveryProfiles", JSON.stringify(deliveryProfiles))
  }

  synchronizeSiblings() {
    const deliveryProfiles = JSON.parse(localStorage.getItem("deliveryProfiles")) || [];
  
    deliveryProfiles.forEach(profile => {
      if (profile.id === this.id) {
        profile.isDefault = this.isDefault;
      } else {
        profile.isDefault = false;
      }
    });
  
    localStorage.setItem("deliveryProfiles", JSON.stringify(deliveryProfiles));
  }
}
import { useRequestURL } from '#imports';

export const useSocialShare = (options = {}) => {
    const { network, url } = options;

    const pageUrl = url != null ? url : useRequestURL().href

    const networksMap = {
        facebook : {
          name: 'facebook',
          shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
          iconName: 'ri:facebook-fill',
          color: '#0866FF'
        },
        twitter : {
          name: 'twitter',
          shareUrl: `https://twitter.com/intent/tweet?url=${pageUrl}`,
          iconName: 'ri:twitter-x-fill',
          'color': '#000000'
        },
        linkedin : {       
          name: 'linkedin',
          shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
          iconName: 'ri:linkedin-fill',
          color: '#0A66C2'
        },
        pinterest : {   
          name: 'pinterest',
          shareUrl: `https://pinterest.com/pin/create/button/?url=${pageUrl}`,
          iconName: 'jam:pinterest',
          color: '#BD081C'         
        },
        pocket : {
          name: 'pocket',          
          shareUrl: `https://getpocket.com/edit?url=${pageUrl}`,
          iconName: 'fe:pocket',
          color: '#EF3F56'          
        },
        whatsapp : {
          name: 'whatsapp',          
          shareUrl: `https://api.whatsapp.com/send?text=${pageUrl}`,
          iconName: 'ri:whatsapp-line',
          color: '#25D366'          
        },
        telegram : {   
          name: 'telegram',       
          shareUrl: `https://t.me/share/url?url=${pageUrl}`,
          iconName: 'mingcute:telegram-fill',
          color: '#26A5E4'
        },
        email : {
          name: 'email',          
          shareUrl: `mailto:?body=${pageUrl}`,
          iconName: 'ic:round-mail', 
          color: '#7e7e7e'         
        },
      }
      
      const socialNetwork = networksMap[network]

      return socialNetwork
  }
  
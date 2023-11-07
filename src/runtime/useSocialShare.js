import { useRequestURL } from '#imports';

export const useSocialShare = (options = {}) => {
    const { network, url } = options;

    const pageUrl = url != null ? url : useRequestURL().href

    const networksMap = {
        facebook : {
          shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
          iconName: 'ri:facebook-fill',
        },
        twitter : {
          shareUrl: `https://twitter.com/intent/tweet?url=${pageUrl}`,
          iconName: 'ri:twitter-x-fill',          
        },
        linkedin : {          
          shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
          iconName: 'ri:linkedin-fill',          
        },
        pinterest : {          
          shareUrl: `https://pinterest.com/pin/create/button/?url=${pageUrl}`,
          iconName: 'jam:pinterest',          
        },
        pocket : {          
          shareUrl: `https://getpocket.com/edit?url=${pageUrl}`,
          iconName: 'fe:pocket',          
        },
        whatsapp : {          
          shareUrl: `https://api.whatsapp.com/send?text=${pageUrl}`,
          iconName: 'ri:whatsapp-line',          
        },
        telegram : {          
          shareUrl: `https://t.me/share/url?url=${pageUrl}`,
          iconName: 'mingcute:telegram-fill',
        },
        email : {          
          shareUrl: `mailto:?body=${pageUrl}`,
          iconName: 'ic:round-mail',          
        },
      }
      
      const socialNetwork = networksMap[network]

      return socialNetwork
  }
  
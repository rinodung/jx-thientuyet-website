<?php
/**
 * ------------------------------------------------------------------------
 * JA Popup Plugin for J25 & J30
 * ------------------------------------------------------------------------
 * Copyright (C) 2004-2011 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
 * @license - GNU/GPL, http://www.gnu.org/licenses/gpl.html
 * Author: J.O.O.M Solutions Co., Ltd
 * Websites: http://www.joomlart.com - http://www.joomlancers.com
 * ------------------------------------------------------------------------
 */

// no direct access
defined('_JEXEC') or die('Restricted access');
?>
<a href="<?php echo $arrData['href'];?>" title="<?php echo $arrData['title'];?>" onclick="return hs.htmlExpand(this, {dimmingOpacity: '<?php echo $arrData['overlayOpacity'];?>', headingText: '<?php echo $arrData['title'];?>', restoreDuration: '<?php echo $arrData['restoreDuration'];?>', expandDuration: '<?php echo $arrData['expandDuration'];?>', objectType: '<?php echo $arrData['objectType'];?>', width:<?php echo $arrData['frameWidth'];?>, height: <?php echo $arrData['frameHeight'];?>, outlineType:<?php echo $arrData['outlineType'];?> <?php echo $arrData['captionId'];?><?php echo $arrData['eventStr'];?>});" ><?php echo $arrData['content'];?></a>
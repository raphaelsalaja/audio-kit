import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonStars({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M16.705,10.223c-.246-.183-.578-.197-.838-.037-.868,.532-1.859,.813-2.867,.813-3.033,0-5.5-2.467-5.5-5.5,0-1.146,.354-2.247,1.023-3.186,.177-.249,.186-.581,.021-.839-.164-.258-.467-.386-.77-.334C3.994,1.847,1.25,5.152,1.25,9c0,4.411,3.589,8,8,8,3.638,0,6.819-2.461,7.735-5.986,.077-.296-.034-.609-.28-.791Z"
          fill={fill}
        />
        <path
          d="M12.743,4.492l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316,.947-.946,.315c-.153,.051-.257,.194-.257,.356s.104,.305,.257,.356l.946,.315,.316,.947c.051,.153,.194,.256,.355,.256s.305-.104,.355-.256l.316-.947,.946-.315c.153-.051,.257-.194,.257-.356s-.104-.305-.257-.356Z"
          fill={secondaryfill}
        />
        <circle cx="14.25" cy="7.75" fill={secondaryfill} r=".75" />
      </g>
    </svg>
  );
}

export default MoonStars;

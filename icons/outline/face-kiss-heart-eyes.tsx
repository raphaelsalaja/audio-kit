import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceKissHeartEyes({
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
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75,13.875c.69,0,1.25-.56,1.25-1.25s-.56-1.25-1.25-1.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.709,10.445c.117,.073,.267,.073,.384,0,.575-.358,2.24-1.532,2.24-3.133,.003-.715-.592-1.298-1.33-1.302-.444,.006-.856,.223-1.103,.58-.247-.358-.659-.575-1.103-.58-.738,.004-1.332,.587-1.33,1.302,0,1.601,1.666,2.776,2.24,3.133Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.291,10.445c-.117,.073-.267,.073-.384,0-.575-.358-2.24-1.532-2.24-3.133-.003-.715,.592-1.298,1.33-1.302,.444,.006,.856,.223,1.103,.58,.247-.358,.659-.575,1.103-.58,.738,.004,1.332,.587,1.33,1.302,0,1.601-1.666,2.776-2.24,3.133Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceKissHeartEyes;

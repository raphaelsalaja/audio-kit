import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Sparkle({
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
          d="m8.743,7.769l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.104-.305-.257-.356h.001Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.2,9.2219c.882-.929,1.279-2.2839.916-3.667-.181-.688-.575-1.3201-1.11-1.7898-2.005-1.7583-4.933-1.0503-6.007,1.1619-.171-.353-.396-.677-.666-.9622-1.452-1.5278-3.867-1.5908-5.395-.1389-1.528,1.4509-1.591,3.8669-.139,5.395l5.48,5.6941c.2825.2939.6987.3682,1.0574.2395"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.658,12.99l-1.263-.421-.421-1.263c-.137-.408-.812-.408-.949,0l-.421,1.263-1.263.421c-.204.068-.342.259-.342.474s.138.406.342.474l1.263.421.421,1.263c.068.204.26.342.475.342s.406-.138.475-.342l.421-1.263,1.263-.421c.204-.068.342-.259.342-.474s-.138-.406-.342-.474h-.001Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle
          cx="12.25"
          cy="6.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Heart2Sparkle;

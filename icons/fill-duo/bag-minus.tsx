import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagMinus({
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
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M11.5 13.25C11.5 12.8358 11.8358 12.5 12.25 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H12.25C11.8358 14 11.5 13.6642 11.5 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.7957 11H12.25C11.0074 11 10 12.0074 10 13.25C10 14.4926 11.0074 15.5 12.25 15.5H15.7673C15.6557 15.7194 15.5143 15.9246 15.3455 16.109C14.8265 16.676 14.0875 17.001 13.3185 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagMinus;

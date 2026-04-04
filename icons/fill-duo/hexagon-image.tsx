import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonImage({
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
          d="M4.14829 3.36959C4.64027 2.52169 5.5462 1.99899 6.52699 1.99899H11.473C12.4538 1.99899 13.3597 2.52169 13.8517 3.36959L16.3168 7.6197C16.8116 8.47334 16.8117 9.52551 16.3168 10.3791L13.8518 14.6293C13.3598 15.4772 12.4538 16 11.473 16H6.52699C5.54693 16 4.64063 15.4789 4.14829 14.6304L1.68323 10.3803C1.18837 9.52665 1.18828 8.47448 1.68315 7.62085L4.14829 3.36959Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.5138 11.7638L13.8518 14.6293C13.3598 15.4772 12.4538 16 11.473 16H6.52698C5.54692 16 4.64062 15.4789 4.14828 14.6304L4.13776 14.6123L9.83601 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.5138 11.7638Z"
          fill={fill}
        />
        <path
          d="M6.75 8.5C7.44 8.5 8 7.9404 8 7.25C8 6.5596 7.44 6 6.75 6C6.06 6 5.5 6.5596 5.5 7.25C5.5 7.9404 6.06 8.5 6.75 8.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HexagonImage;

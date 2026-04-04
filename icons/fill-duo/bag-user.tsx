import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagUser({
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
          d="M14.5 12.5C15.3284 12.5 16 11.8284 16 11C16 10.1716 15.3284 9.5 14.5 9.5C13.6716 9.5 13 10.1716 13 11C13 11.8284 13.6716 12.5 14.5 12.5Z"
          fill={fill}
        />
        <path
          d="M16.6011 17.5H12.399C11.9923 17.5 11.6085 17.3013 11.3717 16.9683C11.1393 16.6407 11.0787 16.2207 11.2096 15.8453C11.6979 14.443 13.0201 13.5001 14.5001 13.5001C15.9801 13.5001 17.3023 14.443 17.7911 15.8458C17.9215 16.2208 17.8609 16.6407 17.6285 16.9684C17.3917 17.3014 17.0078 17.5 16.6011 17.5Z"
          fill={fill}
        />
        <path
          d="M15.4065 6.512C15.2815 5.08 14.1045 4 12.6675 4H5.3335C3.8965 4 2.7185 5.08 2.5945 6.512L1.9425 14.012C1.8755 14.778 2.1355 15.542 2.6545 16.109C3.1735 16.676 3.9125 17.001 4.6815 17.001H9.74728C9.59489 16.4676 9.60497 15.8918 9.79302 15.3521C10.1956 14.1964 10.9955 13.2573 12.0078 12.6706C11.6871 12.1931 11.5 11.6184 11.5 11C11.5 9.34317 12.8432 8 14.5 8C14.8699 8 15.2241 8.06695 15.5513 8.18938L15.4065 6.512Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagUser;

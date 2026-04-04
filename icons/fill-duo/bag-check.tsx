import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagCheck({
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
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3076 13.252L14.0576 15.752C13.9199 15.9048 13.7256 15.9942 13.5195 15.9996C13.5127 16.0001 13.5068 16.0001 13.5 16.0001C13.3018 16.0001 13.1104 15.9215 12.9697 15.7804L11.7197 14.5304C11.4267 14.2374 11.4267 13.7628 11.7197 13.4699C12.0127 13.177 12.4873 13.1769 12.7802 13.4699L13.4716 14.1608L15.1923 12.2482C15.4706 11.9416 15.9433 11.9162 16.2519 12.1925C16.5595 12.4698 16.5849 12.9439 16.3076 13.252Z"
          fill={fill}
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.5989 8.73664C15.0928 8.58277 14.556 8.5 14 8.5C10.9654 8.5 8.5 10.9661 8.5 14C8.5 15.1066 8.82797 16.1376 9.39191 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagCheck;

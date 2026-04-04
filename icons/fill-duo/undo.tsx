import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Undo({
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
          d="M15 10.75C14.825 10.75 14.649 10.6889 14.507 10.5649C13.796 9.94394 11.835 8.49902 9 8.49902C6.186 8.49902 4.229 9.92799 3.519 10.542C3.205 10.813 2.731 10.778 2.461 10.465C2.19 10.152 2.225 9.67798 2.538 9.40698C3.376 8.68298 5.682 6.99805 9 6.99805C12.342 6.99805 14.654 8.70196 15.493 9.43396C15.805 9.70596 15.837 10.1799 15.565 10.4919C15.417 10.6619 15.209 10.75 15 10.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.53099 11.9721C7.46699 11.9721 7.40099 11.9641 7.33499 11.9461L2.80499 10.7241C2.60199 10.6691 2.42999 10.531 2.33399 10.344C2.23799 10.157 2.22399 9.93805 2.29699 9.74005L3.92199 5.33807C4.06599 4.95007 4.49699 4.7521 4.88499 4.8941C5.27399 5.0381 5.47199 5.46911 5.32899 5.85711L3.98799 9.48907L7.72599 10.497C8.12599 10.605 8.36299 11.0171 8.25499 11.4161C8.16499 11.7501 7.86199 11.971 7.53099 11.971V11.9721Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Undo;

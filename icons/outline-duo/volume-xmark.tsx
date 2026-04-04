import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeXmark({
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
          d="M11.4805 2.2427C11.8133 2.0303 12.2497 2.26902 12.25 2.6636V5.04297C11.8269 5.13914 11.475 5.37176 11.1592 5.65872C10.3356 6.48232 10.2833 7.78553 11.0059 8.67141C11.1014 8.78858 11.2116 8.89277 11.3184 8.99954L11.1592 9.15969C10.2808 10.0384 10.2806 11.4627 11.1592 12.3413C11.4703 12.6523 11.8506 12.8702 12.25 12.9609V15.3374C12.2497 15.732 11.8133 15.9707 11.4805 15.7583L6 12.2495H3.25C2.422 12.2495 1.75 11.5775 1.75 10.7495V7.24954C1.75025 6.42175 2.42215 5.74954 3.25 5.74954H6L11.4805 2.2427Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 7.25L16.25 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 4.3064V2.6641C12.25 2.2691 11.813 2.0301 11.48 2.243L6 5.75011H3.25C2.422 5.75011 1.75 6.42201 1.75 7.25011V10.7501C1.75 11.5782 2.422 12.2501 3.25 12.2501H6L11.48 15.7582C11.8129 15.9711 12.25 15.7321 12.25 15.3371V13.7023"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25L12.75 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default VolumeXmark;

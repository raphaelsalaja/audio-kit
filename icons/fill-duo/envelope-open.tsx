import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeOpen({
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
          d="M16.7696 5.65997L9.10647 9.36533C9.03965 9.39777 8.96016 9.39805 8.89105 9.36463L1.22983 5.66178C1.08153 5.99398 1.00021 6.361 1 6.74849V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.1148 16 15.8861 15.6012 16.3901 14.9775C16.5502 14.7793 16.6833 14.5585 16.784 14.3206C16.9231 13.9916 17 13.6298 17 13.25L17 6.754L17 6.75201L17 6.75001C17 6.36101 16.9184 5.99291 16.7696 5.65997Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.84522 1.21726C9.31876 0.926927 8.68129 0.926927 8.15483 1.21726L2.42172 4.38034C1.8881 4.67475 1.47067 5.12236 1.22986 5.66178L8.89108 9.36463C8.96019 9.39805 9.03967 9.39777 9.1065 9.36533L16.7696 5.65997C16.5286 5.12115 16.1114 4.67445 15.5783 4.38034L9.84522 1.21726Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeOpen;

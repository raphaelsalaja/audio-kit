import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeFeather({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V8.51345C13.2544 8.85983 11.0932 11.0003 9.91929 13.0117C9.39377 13.9121 9.05832 14.7951 8.84761 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.9688 4.83458L9.84531 8.76513C9.31885 9.05549 8.68124 9.05557 8.15478 8.76521L1.03101 4.83535C1.23084 3.513 2.37171 2.5 3.74998 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9688 4.83458Z"
          fill={fill}
        />
        <path
          d="M17.916 10.4048C17.7764 10.1353 17.499 9.97659 17.1846 10.0029C10.8301 10.5591 10.0127 17.0991 10.0049 17.165C9.95805 17.5766 10.2539 17.9482 10.6651 17.9951C10.6944 17.9985 10.7227 18 10.751 18C11.127 18 11.4512 17.7178 11.4951 17.335C11.4995 17.2963 11.5237 17.1037 11.5877 16.8113C11.675 16.3891 12.0312 15.0156 12.8281 14.1094C12.8281 14.1094 12.5 15.3906 12.7034 16.5H13.5C16.5498 16.5 16.9189 14.5146 17.1885 13.0649C17.3213 12.352 17.4463 11.6792 17.8223 11.2343C18.0186 11.0024 18.0556 10.6748 17.916 10.4048Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeFeather;

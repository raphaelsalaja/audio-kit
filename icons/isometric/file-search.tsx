import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileSearch({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M6.99988 6.49999L5.90502 5.96196C5.5913 5.02961 6.10316 4.02119 7.04095 3.72408L7.20785 3.6712L7.99988 3.99999L7.49988 4.99999L6.99988 6.49999Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12.5563 20.8301L9.51611 19.31L20.3798 14.1931L21.3142 14.7537C22.5205 15.3167 22.1463 16.3797 21.4391 16.7316L12.9396 21.0672L12.5563 20.8301Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20.5 14.25L21.7111 14.8556C22.4482 15.2241 22.4482 16.2759 21.7111 16.6444L11.1708 21.9146C10.7485 22.1257 10.2515 22.1257 9.82918 21.9146L2.28885 18.1444C1.55181 17.7759 1.55181 16.7241 2.28885 16.3556L3.5 15.75"
          stroke={fill}
        />
        <path
          d="M8.17713 10.4114L2.28885 13.3556C1.55181 13.7241 1.55181 14.7759 2.28885 15.1444L9.82918 18.9146C10.2515 19.1257 10.7485 19.1257 11.1708 18.9146L21.7111 13.6444C22.4482 13.2759 22.4482 12.2241 21.7111 11.8556L18.8229 10.4114"
          stroke={fill}
        />
        <path
          d="M8 7.75001L11.3292 6.08542C11.7515 5.87428 12.2485 5.87428 12.6708 6.08542L17.2466 8.37329"
          stroke={fill}
        />
        <path
          d="M20 7V9L19 10.5L17 11.625L14 12V9L17 8.5L20 7Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7 6.75004L2.71902 4.60953C2.27836 4.3892 2 3.93881 2 3.44614C2 3.01124 2.21735 2.60512 2.5792 2.36388L2.71964 2.27025C3.20219 1.94854 3.82013 1.91007 4.33887 2.16944L8.2564 4.12821"
          stroke={fill}
        />
        <path
          d="M20 6L20 8.5C20 10.433 17.0899 12 13.5 12C9.91015 12 7 10.433 7 8.5L7 6"
          stroke={fill}
        />
        <path
          d="M20 6C20 7.65685 17.0899 9 13.5 9C9.91015 9 7 7.65685 7 6C7 4.34314 9.91015 3 13.5 3C17.0899 3 20 4.34314 20 6Z"
          stroke={fill}
        />
        <path d="M7 13.75L11 15.75" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default FileSearch;

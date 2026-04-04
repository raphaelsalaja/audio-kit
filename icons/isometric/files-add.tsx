import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilesAdd({
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
          d="M12.5563 18.0801L9.51611 16.56L20.3798 11.4431L21.3142 12.0037C22.5205 12.5667 22.1463 13.6297 21.4391 13.9816L12.9396 18.3172L12.5563 18.0801Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12.6349 21.1252L9.59473 19.6051L20.4584 14.4882L21.3928 15.0488C22.1971 15.4066 22.2878 16.6111 21.5806 16.963L12.8992 21.2986L12.6349 21.1252Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20.5 14.5L21.7111 15.1056C22.4482 15.4741 22.4482 16.5259 21.7111 16.8944L11.1708 22.1646C10.7485 22.3757 10.2515 22.3757 9.82918 22.1646L2.28885 18.3944C1.55181 18.0259 1.55181 16.9741 2.28885 16.6056L3.5 16"
          stroke={fill}
        />
        <path d="M13 8.5L16 10" stroke={fill} strokeLinecap="round" />
        <path d="M11 9.5L12.5 10.25" stroke={fill} strokeLinecap="round" />
        <path
          d="M4 3L1.75 1.875M4 3L6.25 4.125M4 3V0.75M4 3V5.25"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M20.5 11.5L21.7111 12.1056C22.4482 12.4741 22.4482 13.5259 21.7111 13.8944L11.1708 19.1646C10.7485 19.3757 10.2515 19.3757 9.82918 19.1646L2.28885 15.3944C1.55181 15.0259 1.55181 13.9741 2.28885 13.6056L3.5 13"
          stroke={fill}
        />
        <path
          d="M14.1708 5.33541L21.7111 9.10557C22.4482 9.4741 22.4482 10.5259 21.7111 10.8944L11.1708 16.1646C10.7485 16.3757 10.2515 16.3757 9.82918 16.1646L2.28885 12.3944C1.55181 12.0259 1.5518 10.9741 2.28885 10.6056L12.8292 5.33541C13.2515 5.12426 13.7485 5.12426 14.1708 5.33541Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default FilesAdd;

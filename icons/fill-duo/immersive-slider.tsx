import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImmersiveSlider({
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
          d="M12.25 16.5H8.75C8.3359 16.5 8 16.1641 8 15.75C8 15.3359 8.3359 15 8.75 15H12.25C12.6641 15 13 15.3359 13 15.75C13 16.1641 12.6641 16.5 12.25 16.5Z"
          fill={fill}
        />
        <path
          d="M5.75 16.5C6.16421 16.5 6.5 16.1642 6.5 15.75C6.5 15.3358 6.16421 15 5.75 15C5.33579 15 5 15.3358 5 15.75C5 16.1642 5.33579 16.5 5.75 16.5Z"
          fill={fill}
        />
        <path
          d="M16.3384 2.5811C15.9322 2.3638 15.4395 2.3892 15.0572 2.6441L13.023 4.0001H13.0001V13.5001H13.023L15.0562 14.8556C15.439 15.1124 15.9317 15.1364 16.3384 14.9191C16.7466 14.7013 17 14.2785 17 13.8161V3.6843C17 3.2219 16.7466 2.7988 16.3384 2.5811Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.97709 4L2.94389 2.6445C2.56059 2.3882 2.06789 2.3633 1.66169 2.581C1.25349 2.7988 1.00009 3.2216 1.00009 3.684V13.8158C1.00009 14.2782 1.25349 14.7011 1.66169 14.9188C1.84629 15.0174 2.04889 15.0663 2.25009 15.0663C2.49279 15.0663 2.73399 14.9955 2.94299 14.8559L4.97719 13.4999H5.00009V3.9999L4.97709 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path d="M13 4H5V13.5H13V4Z" fill={fill} />
      </g>
    </svg>
  );
}

export default ImmersiveSlider;

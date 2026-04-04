import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset3({
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
          d="M14.25 15H12.25C11.3896 15 10.5664 14.5889 10.0508 13.9004L9.60059 13.3003C9.31349 12.9185 8.68651 12.9185 8.39941 13.3003L7.94919 13.9004C7.43359 14.5889 6.6103 15 5.75 15H3.75C2.2334 15 1 13.7666 1 12.25V7.75C1 6.2334 2.2334 5 3.75 5H14.25C15.7666 5 17 6.2334 17 7.75V12.25C17 13.7666 15.7666 15 14.25 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.5 11.5C6.32843 11.5 7 10.8284 7 10C7 9.17157 6.32843 8.5 5.5 8.5C4.67157 8.5 4 9.17157 4 10C4 10.8284 4.67157 11.5 5.5 11.5Z"
          fill={fill}
        />
        <path
          d="M12.5 11.5C13.3284 11.5 14 10.8284 14 10C14 9.17157 13.3284 8.5 12.5 8.5C11.6716 8.5 11 9.17157 11 10C11 10.8284 11.6716 11.5 12.5 11.5Z"
          fill={fill}
        />
        <path
          d="M3.75 5H3.9888L4.5527 4.0908C4.7822 3.7207 5.1787 3.5 5.6142 3.5H12.3876C12.8222 3.5 13.2196 3.7212 13.4491 4.0913L14.0128 5H14.2499C15.2822 5 16.1725 5.5781 16.6427 6.4214C16.6313 6.398 16.6301 6.3723 16.6161 6.3496L14.7235 3.2998C14.2176 2.4858 13.3446 2 12.3876 2H5.6142C4.6552 2 3.78221 2.4863 3.27731 3.3003L1.47031 6.2131C1.96491 5.4817 2.8021 5 3.75 5Z"
          fill={fill}
        />
        <path
          d="M1.47 6.21391L1.3858 6.34961C1.374 6.36861 1.37321 6.39061 1.36331 6.41011C1.39991 6.34521 1.4284 6.27541 1.47 6.21391Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VrHeadset3;

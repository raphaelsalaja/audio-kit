import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayersMinus({
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
          d="M15.6856 11.5483L9.8165 8.45799C9.3058 8.18799 8.69539 8.18751 8.18469 8.45751L2.3156 11.5483V11.5493C1.8215 11.8096 1.5148 12.3179 1.5148 12.8764C1.5148 13.4349 1.8214 13.9433 2.3156 14.2035L8.18381 17.2929C8.43971 17.4282 8.7199 17.4955 9.0007 17.4955C9.2805 17.4955 9.5608 17.4281 9.8156 17.2934L15.6857 14.2026C16.1798 13.9423 16.4865 13.434 16.4865 12.8755C16.4865 12.317 16.1798 11.8085 15.6856 11.5483Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.2501 2.5H12.2501C11.836 2.5 11.5001 2.8359 11.5001 3.25C11.5001 3.6641 11.836 4 12.2501 4H17.2501C17.6642 4 18.0001 3.6641 18.0001 3.25C18.0001 2.8359 17.6642 2.5 17.2501 2.5Z"
          fill={fill}
        />
        <path
          d="M15.6856 8.29741L9.8165 5.20708C9.3058 4.93708 8.69539 4.93659 8.18469 5.20659L2.3156 8.29741C1.8215 8.55771 1.5148 9.06697 1.5148 9.62547C1.5148 10.184 1.8214 10.6924 2.3156 10.9526L8.18381 14.042C8.43971 14.1773 8.7199 14.2446 9.0007 14.2446C9.2805 14.2446 9.5608 14.1772 9.8156 14.0425L15.6857 10.9517C16.1798 10.6914 16.4865 10.1831 16.4865 9.62456C16.4865 9.06606 16.1798 8.55761 15.6856 8.29741Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayersMinus;

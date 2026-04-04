import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarElectric({
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
          d="m15.9,7.6499l-.7811-.5857-.6795-2.9346c-.2888-1.2468-1.3993-2.1296-2.6791-2.1296h-5.5205c-1.2796,0-2.3904.8828-2.679,2.1296l-.6796,2.9346-.7811.5857c-.6924.5195-1.1,1.3345-1.1,2.2002v4.3999c0,.9666.7835,1.75,1.75,1.75h.4999c.9666,0,1.75-.7834,1.75-1.75v-.25h8v.25c0,.9666.7835,1.75,1.75,1.75h.5c.9665,0,1.75-.7834,1.75-1.75v-4.3999c0-.8657-.4075-1.6807-1.1-2.2002Zm-11.9,3.8501c-.5522,0-1-.4478-1-1s.4478-1,1-1,1,.4478,1,1-.4477,1-1,1Zm7.2617-3.5161l-2.1924,3.125c-.1206.1724-.314.2661-.5122.2661-.1011,0-.2031-.0244-.2974-.0757-.2793-.1514-.4004-.4878-.2822-.7827l.6104-1.5166h-1.3379c-.2334,0-.4468-.1299-.5547-.3364-.1074-.207-.0908-.4565.043-.6475l2.1924-3.125c.1821-.2607.5298-.3423.8096-.1904.2793.1514.4004.4878.2822.7827l-.6104,1.5166h1.3379c.2334,0,.4468.1299.5547.3364.1074.207.0908.4565-.043.6475Zm2.7383,3.5161c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CarElectric;

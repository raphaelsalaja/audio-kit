import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileSparkle({
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
          d="m17.099,9.299l-1.354-1.805c-.072-1.944-.972-3.749-2.49-4.984-1.587-1.289-3.665-1.783-5.701-1.359-2.549.533-4.619,2.602-5.153,5.151-.599,2.868.639,5.7,3.099,7.191v2.756c0,.414.336.75.75.75h5c.414,0,.75-.336.75-.75v-1.75h.89c1.435,0,2.64-1.121,2.742-2.551l.078-1.075,1.068-.427c.217-.086.381-.269.443-.494.063-.225.019-.466-.122-.653Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.589,6.9055l-1.515-.5096-.505-1.5258c-.164-.4935-.975-.4935-1.139,0l-.505,1.5258-1.515.5096c-.245.0816-.41.3132-.41.5731s.165.4915.41.5731l1.515.5096.505,1.5258c.082.2467.312.4129.57.4129s.487-.1662.57-.4129l.505-1.5258,1.515-.5096c.245-.0816.41-.3132.41-.5731s-.166-.4905-.411-.5731Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SideProfileSparkle;
